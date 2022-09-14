/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// function addToTwelve(arr) {
//   if (arr.length === 0) {
//     return false;

//     // } for (let i = 0; i < arr.length; i++) {
//     //   let num = arr[i];
//     //   if (num + arr[i + 1] === 12) {
//     //     return true;
//     //   }
//     // }
//     // return false;
//   } else {
//     arr.forEach((num, i, arr) => {
//       if (num[i] + num[i + 1] === 12) {
//         return true;
//       } else {
//         //return false;
//       }
//     })
//     return addToTwelve(arr.shift())
//   }

// }

// function addToTwelve(arr) {
//   if (arr.length === 0) {
//     return false;

//   }
//   arr.forEach((num, i) => {

//     if (num + num === 12) {
//       return true;
//       addToTwelve(arr.shift())
//     }

//   })
//   return false
// }

function addToTwelve(arr) {
  if (arr.length === 0) {
    return false;
  }

  let first = arr[0]
  let second = arr[1]
  const total = first + second
  if (total === 12) {
    return true;
  }

  return addToTwelve(arr.slice(1))

}




// function addToTwelve(arr) {
//   let first = arr[0];
//   if (arr.length <= 1) {
//     return false;
//   } else if (first + recurse === 12) {
//     return true;

//   if (arr[0] + addToTwelve(arr.slice(1)) === 12) {
//   return true;


//   let recurse = addToTwelve(arr.slice(1)) + arr[0];

//   let recurse = first + // something with the original fcn passing in arr.slice(1). maybe.

//   }
// }




console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
