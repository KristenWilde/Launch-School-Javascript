  var templates = {};
  var photos;
  var comments;
  var photoIdx;

$(function() {

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
  })

  $("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });
  
  $('a.prev').on('click', function(e) {
    e.preventDefault();

  })

  var slideshow = {
    $slideshow: $('#slideshow'),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$slideshow.find('figure:visible');
      var $prev = $current.prev('figure');
      if (!$prev.length) {
        $prev = this.$slideshow.find('figure').last();
      }
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr('data-id'));
    },
    bind: function() {
      this.$slideshow.find('.prev').on('click', this.prevSlide.bind(this));
      this.$slideshow.find('.next').on('click', this.nextSlide.bind(this));
    },
    nextSlide: function(e) {
        e.preventDefault();
        var $current = this.$slideshow.find('figure:visible');
        var $next = $current.next('figure');
        if (!$next.length) {
          $next = this.$slideshow.find('figure').first();
        }
        $current.fadeOut(this.duration);
        $next.fadeIn(this.duration);
        this.renderPhotoContent($next.attr('data-id'));
    },
    renderPhotoContent: function(id) {
      renderPhotoInformation(id);
      getCommentsFor(id);
    },
    init: function() {
      this.bind();
    }
  }

  $.ajax({
    url: '/photos', 
    success: function(json) {
      photos = json;
      renderPhotos()
      photoIdx = 0;
      renderPhotoInformation(photos[0].id);
      getCommentsFor(photoId());
      slideshow.init();
    }
  })

  function getCommentsFor(id) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + id,
      success: function(comment_json) {
        $('#comments > ul').html(templates.comments({comments: comment_json}));
      }
    });
  }

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(id) {
    var photo = photos.filter(function(item) {
      return item.id == id;
    })[0];
    $('section > header').html(templates.photo_information(photo))
  }

  // $.ajax({
  //   url: '/comments/new',
  //   method: 'POST',
  //   success: function(){}
  // })

})