/*
i: string
O: opject with prop's
    lowercase:
    uppercase:
    neither:
R: Format percentages as strings with 2 decimal chars.
A: loop through chars, increment appropriate variable.
Test: 
Calculate percentages
Return object
*/

function letterPercentages(string) {
  var lowercase = 0;
  var uppercase = 0;
  var neither = 0;
  var charCode;
  var total = string.length;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      uppercase += 1;
    } else if (charCode >= 97 && charCode <= 122) {
      lowercase += 1;
    } else {
      neither += 1;
    }
  }

  return {
    lowercase: (lowercase/total * 100).toFixed(2),
    uppercase: (uppercase/total * 100).toFixed(2),
    neither: (neither/total * 100).toFixed(2),
  }
}

console.log(
letterPercentages('abCdef 123'),
// { lowercase: '50.00', uppercase: '10.00', neither: '40.00' }
letterPercentages('AbCd +Ef'),
// { l: '37.50', u: '37.50', n: '25.00'}
letterPercentages('123'),
// { l: '0.00', u: '0.00', neither: '100.00' }
  )

