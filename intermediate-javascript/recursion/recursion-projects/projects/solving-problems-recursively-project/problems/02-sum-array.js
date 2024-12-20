/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
/**
 * This function takes an array of integers and returns
 * the value of all the integers added together. Your
 * array may include a mix of positive and negative
 * integers!
 *
 * @param {Array} array
 *     This is the array to get its sum.
 *
 * @returns
 *     the value of all the integers added together.
 */
function sumArray(array) {
  if (array.length === 0) return 0;
  return array[0] + sumArray(array.slice(1));
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
