/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

*/

/**
 * This function accepts an array as an arg. The function
 * should return the total sum of all values in the array.
 *
 * @param {Array<number>} nums
 *     This is the array to calculate its sum.
 *
 * @returns
 *     the total sum of all values in the array.
 */
let sumWithReduce = function(nums) {
  // Your code here
  return nums.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumWithReduce;
} catch (e) {
  module.exports = null;
}