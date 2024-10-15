/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array. 



Examples:
spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => [1,2,3];
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];
***********************************************************************/

/**
 * This function accepts two arrays and uses *spread operator*
 * syntax to return a single array.
 *
 * @param {Array<number>} array1
 *     This is the first array to spread.
 *
 * @param {Array<number>} array1
 *     This is the second array to spread.
 *
 * @returns
 *     a single array containing all elements from the two
 *     given arrays.
 */
function spreadItOut(array1, array2) {
  // Your code here
  return [...array1, ...array2];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;