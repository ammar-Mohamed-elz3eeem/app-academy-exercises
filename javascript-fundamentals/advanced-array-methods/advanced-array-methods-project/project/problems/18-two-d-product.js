/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

/**
 * This function takes in a 2D array of numbers as an argument.
 * The function should return the total product of all numbers
 * multiplied together.
 *
 * @param {Array<Array<number>>} arr
 *     This is the 2D array to get its product.
 *
 * @returns
 *     the total product of all numbers multiplied together.
 */
let twoDimensionalProduct = function(arr) {
  // Your code here
  return arr.reduce(function (acc, subArray) {
    const productOfSubArray = subArray.reduce(function (acc, num) {
      return acc * num;
    }, 1);
    return acc * productOfSubArray;
  }, 1);
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}