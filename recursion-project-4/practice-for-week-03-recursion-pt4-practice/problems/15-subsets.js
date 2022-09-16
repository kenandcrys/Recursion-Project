/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  //  const newArray = arr.reduce(
  //   (subsets, value) => subsets.concat(
  //    subsets.map(set => [value,...set])
  //   ),
  //   [[]]
  // );
  // return newArray;
  const subsets = [[]];
    
  for (const el of arr) {
      const last = subsets.length-1;
      for (let i = 0; i <= last; i++) {
          subsets.push( [...subsets[i], el] );
      }
  }
  return subsets;
}

console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}