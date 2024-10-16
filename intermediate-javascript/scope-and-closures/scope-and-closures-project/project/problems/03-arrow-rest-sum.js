/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

/**
 * This function accepts all incoming parameters and
 * sums them.
 *
 * @param {Array} otherNums
 *     This is the all the incoming parameters.
 *
 * @returns
 *     The result of summing up all the incoming
 *     numbers.
 */
const arrowRestSum = (...otherNums) => {
  // Your code here
  return otherNums.reduce((acc, curr) => acc + curr);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowRestSum;
} catch (e) {
  return null;
}