/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

base case: stop at arr.length
recursive step : current number plus previous.
***********************************************************************/

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  // return sum + arr[0] +
  let recurse = sum += sumArray(arr.slice(1))

  return arr[0] + recurse;
}


console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
