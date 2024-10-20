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

// your code here

/**
 * This function returns true if there are two adjacent
 * numbers in the input array that can sum up to 12.
 * Otherwise, return false.
 *
 * @param {Array} array
 *     This is the array to check its adjacent elements.
 *
 * @returns
 *     true if there are two adjacent numbers in the input
 *     array that can sum up to 12. Otherwise, return false.
 */
function addToTwelve(array) {
  if (array.length === 1) return false;
  return array[0] + array[1] === 12 || addToTwelve(array.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
