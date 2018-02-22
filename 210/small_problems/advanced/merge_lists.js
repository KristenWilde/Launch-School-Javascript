/*Write a function that takes two sorted arrays as arguments, 
and returns a new array that contains all the elements from 
both input arrays in sorted order.

You may not provide any solution that requires you to sort the 
result array. You must build the result array one element at a 
time in the proper order.

Your solution should not mutate the input arrays.

i: two sorted arrays.
o: new array (don't mutate originals)
contains all elements from both arrays in sorted order.
might have empty arrays
For now, all elements in arrays will be positive integers.

approach:
initialize new array.
designate current element from each array.
  find which is greater, push to result, and re-assign current to next index.

*/

const merge = (arr1, arr2) => {
  const result = [];
  let idx1 = 0;
  let idx2 = 0;
  let current1 = arr1[idx1];
  let current2 = arr2[idx2];
  while (current1 != undefined || current2 != undefined) {
    var test = 'can you see me?'
    if (current2 === undefined || current1 < current2) {
      result.push(current1);
      idx1 += 1;
      current1 = arr1[idx1];
    } else {
      result.push(current2);
      idx2 += 1;
      current2 = arr2[idx2];
    }
  }
  console.log(test)
}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// [1, 2, 5, 6, 8, 9]

merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// [1, 1, 2, 2, 3]

merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]