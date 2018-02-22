/*
i: year greater than 0
o: boolean - true if leap year.
r: 
if divisible by 4, true, 
unless it is divisible by 100 (false)
unless is is divisble by 400 (true)

for any year > 0. 

approach: conditionals

*/

// function isLeapYear(year) {
//   if (year % 400 === 0) return true;
//   if (year % 100 === 0) return false;
//   return year % 4 === 0;
// }

const isLeapYear = year => !(year % 400) || (!(year % 4) && !!(year % 100))

console.log(isLeapYear(2016)) // true
console.log(isLeapYear(2015)) // false
console.log(isLeapYear(100)) // false
console.log(isLeapYear(400)) // true
console.log(isLeapYear(2100)) // false
console.log(isLeapYear(240000)) // true
console.log(isLeapYear(1)) // false
console.log(isLeapYear(4)) // true
console.log(isLeapYear(1752)) //true