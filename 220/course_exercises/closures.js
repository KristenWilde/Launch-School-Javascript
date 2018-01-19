
/*
I: num
O: function 
  I: arg number
  O: logs counting from the function number to the arg number
    counts up or down.

*/

function makeCounterLogger(num) {
  return function(endNum) {
    var startNum = num;
    console.log(startNum)
    while (startNum !== endNum) {
      startNum < endNum ? startNum++ : startNum-- ;
      console.log(startNum)
    } 
  }
}


/*
Write a function named makeMultipleLister that, when invoked and 
passed a number, returns a function that logs every positive 
integer multiple of that number less than 100. Usage looks like this:

I: integer
O: function
  I: none
  O: logs all multiples of the integer less than 100.

A:
define function:
  initialize variable = argument
  while variable < 100
    log variable
    variable += argument

*/

function makeMultipleLister(int) {
  return function() {
    var num = int;
    while (num < 100) {
      console.log(num);
      num += int;
    }
  }
}

var lister = makeMultipleLister(13);
lister();
/*
13
26
39
52
65
78
91
*/

var total = 0;

function add(num) {
  total += num;
  return total;
}

function subtract(num) {
  total -= num;
  return total;
}

/*Write a function named later that takes two arguments: 
a function and an argument for that function. 
The return value should be a new function that calls the 
input function with the provided argument, like this:

I: a function and an argument
O: a function that calls that function with the provided argument.
*/

function later(func, arg) {
  return function() {
    return func(arg);
  };
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning();
//logs: The system is shutting down!


