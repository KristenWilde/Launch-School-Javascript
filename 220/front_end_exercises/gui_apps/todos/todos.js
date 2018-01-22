todo_items = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];

$(function() {
  var todoTemplate = Handlebars.compile($('#template').html());
  var currentId;

  function display_items() {
    $('ul').html(todoTemplate(todo_items));
  }

  display_items();

  $('ul').on('click', '.delete', function(e) {
    $('.confirm').show();
    currentId = $(this).parent().attr('id');
    console.log(currentId);
  });

  $('#no').on('click', function(e) {
    $('.confirm').hide();
  });

  $('#yes').on('click', function(e) {
    $('.confirm').hide();
    todo_items = todo_items.filter(function(item) {
      return String(item.id) !== currentId;
    })
    display_items();
  });
});