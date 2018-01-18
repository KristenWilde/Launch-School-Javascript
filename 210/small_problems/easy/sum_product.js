var integer;
var operation;
var integers = [];
var result;

function validInt(num) {
  return num > 0 && num % 1 === 0 && typeof num === 'number';
}

function validOp(char) {
  return char === 's' || char === 'p';
}

while (!validInt(integer)) {
  integer = parseInt(prompt('Please enter an integer greater than 0.'), 10);  
}

while (!validOp(operation)) {
  operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
}

for (let i = 1; i <= integer; i++) {
  integers.push(i);
}

result = integers.reduce(function(accum, int) {
  return operation === 's' ? accum + int : accum * int;
});

operation = operation === 's' ? 'sum' : 'product';

alert('The ' + operation + ' of the integers between 1 and ' + integer +
  ' is ' + result + '.');
