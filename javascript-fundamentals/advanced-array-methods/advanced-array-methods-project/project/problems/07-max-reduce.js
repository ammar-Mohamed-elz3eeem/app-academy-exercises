/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/

/**
 * This function takes in an array of numbers. The function
 * should return the largest number of the array.
 *
 * @param {Array<number>} nums
 *     This is the array to calculate its max number.
 *
 * @returns
 *     the largest number of the array.
 */
let maxWithReduce = function(nums) {
  // Your code here
  return nums.reduce(function (acc, curr) {
    if (curr > acc) {
      return curr;
    }
    return acc;
  }, 0);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}