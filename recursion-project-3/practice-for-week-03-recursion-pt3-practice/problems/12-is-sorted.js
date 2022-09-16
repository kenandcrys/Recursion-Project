/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:


***********************************************************************/


  function isSorted(arr) {
    if (arr.length <= 1) { // base case
      return true;
    } else if (arr[0] <= arr[1]) { // recursive step
      return isSorted(arr.slice(1))
    }
    return false;
  } 

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}