todo_items = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];

var todoTemplate = Handlebars.compile($('#template').html());

var App = {
  displayItems: function() {
    $('#todos').html(todoTemplate(todo_items));
  },
  deleteItem: function(id) {
    todo_items = todo_items.filter(function(item) {
      return item.id != id;
    })
  },
  bindHandlers: function() {
    $('#todos').on('contextmenu', 'li', function(e) {
      e.preventDefault();
      var id = this.id;
      $('.menu').css({
        top: e.clientY,
        left: e.clientX,
      }).fadeIn();
      $('#yes').attr('data-id', this.id);
    });

    $(document).on('click', function() {
      $('.menu').fadeOut();
    });

    $('.delete').on('click', function(e) {
      $('.confirm').fadeIn();
    });

    $('#no').on('click', function(e) {
      $('.confirm').fadeOut();
    });

    $('#yes').on('click', function(e) {
      $('.confirm').fadeOut();
      App.deleteItem($(this).attr('data-id'));
      App.displayItems();
    });
  },
  init: function() {
    this.displayItems();
    this.bindHandlers();
    console.log('loaded')
  }
}

App.init();