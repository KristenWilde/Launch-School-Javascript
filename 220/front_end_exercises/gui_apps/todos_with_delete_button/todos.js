todo_items = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];

var todoTemplate = Handlebars.compile($('#template').html());

var App = {
  displayItems: function() {
    $('ul').html(todoTemplate(todo_items));
  },
  deleteItem: function(id) {
    todo_items = todo_items.filter(function(item) {
      return item.id != id;
    })
  },
  bindHandlers: function() {
    $('ul').on('click', '.delete', function(e) {
      $('.confirm').fadeIn();
      var id = $(this).parent().attr('id');
      console.log(id);
      $('#yes').attr('data-id', id);
    });

    $('#no').on('click', function(e) {
      $('.confirm').fadeOut();
    });

    $('#yes').on('click', function(e) {
      $('.confirm').fadeOut();
      var id = $(this).attr('data-id');
      App.deleteItem(id);
      App.displayItems();
    });
  },
  init: function() {
    this.displayItems();
    this.bindHandlers();
  }
}

App.init();