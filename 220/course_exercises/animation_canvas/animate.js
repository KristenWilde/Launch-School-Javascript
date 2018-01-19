$(function() {

  function getDataObj(formArray) {
    return formArray.reduce(function(result, item) {
      result[item.name] = item.value;
      return result;
    }, {});
  }

  function reset() {
    $('.canvas > div').each(function() {
      var $div = $(this);
      $div.css({
        top: +$div.data().start_y,
        left: +$div.data().start_x,
      })
    });
  }

  $('form').on('submit', function(e) {
    e.preventDefault();

    var data = getDataObj($(this).serializeArray());
    
    var $newShape = $("<div />", {
      "class": data.shape_type,
      data: data,
      css: {
        top: +data.start_y,
        left: +data.start_x
      }
    }).appendTo('.canvas');
  });

  $('#animate').on('click', function(e) {
    e.preventDefault();
    reset();

    $('.canvas > div').each(function() {
      var $div = $(this);
      $div.animate({
        top: $div.data().end_y + "px",
        left: $div.data().end_x + 'px',
      }, 1000);
    });
  });

  $('#stop').on('click', function(e) {
    e.preventDefault();
    $('.canvas > div').stop();
  });
});