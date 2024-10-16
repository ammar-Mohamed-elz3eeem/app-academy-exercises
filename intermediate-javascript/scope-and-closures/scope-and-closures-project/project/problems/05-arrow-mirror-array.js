/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

/**
 * This function takes in an array as an argument
 * and returns a new array "mirrored"
 *
 * @param {Array} array
 *     This is the array to mirror.
 *
 * @returns
 *     a new array containing both given array and
 *     the mirrored version of the given array.
 */
const mirrorArray = (array) => {
  // Your code here
  return [...array, ...array.reverse()];
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}