/*
Function api:

I: none
O: function
  I: to-do string item on list, new to-do item not on list, or nothing.
  O: with new to-do, adds it to the list and logs message: todo + ' added!'
     with existing to-do, removes it from list.
     with nothing, logs all items on list.
      if list empty, logs a message 'The list is empty'

D: array
A:
initialize empty array called list.
define function with param 'toDo'
  if todo is undefined,
    if list is empty log message.
    else log each list item.
  if list does not contain toDo,
    add it
    log message
  if it does,
    remove it
    log message
*/

function makeList() {
  var list = [];

  return function(toDo) {
    if (toDo === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.')
      } else {
        list.forEach(function(item) {
          console.log(item);
        });
      }
    } else if (list.indexOf(toDo) === -1) {
      list.push(toDo);
      console.log(toDo + ' added!');
    } else {
      list.splice(list.indexOf(toDo), 1);
      console.log(toDo + ' removed!')
    }
  }
}

var list = makeList();
list();
 // The list is empty
list('make breakfast') 
// make breakfast added!
list('read book') 
// read book added!
list(); 
// make breakfast
// read book
list('make breakfast') // make breakfast removed!
list();
// read book
/*

/* Object API:

I: none
O: an object that provides an interface of methods to interact with 
a  new todo list.
list.add(toDo) // toDo added!
list.remove(toDo) // todo removed!
list.list(); // log list items
list.collection = [];

*/

function makeList() {
  var items = [];
  return {
    add: function(toDo) {
      items.push(toDo);
      console.log(toDo + ' added!');
    },
    remove: function(toDo) {
      items.splice(items.indexOf(toDo), 1);
      console.log(toDo + ' removed!');
    },
    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.')
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    }
  }
}