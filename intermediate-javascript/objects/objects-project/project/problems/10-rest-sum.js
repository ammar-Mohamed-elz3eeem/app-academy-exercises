/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

/**
 * This function that accepts all incoming parameters and
 * sums them.
 *
 * @param {Array} otherNums
 *     This is all the incoming numbers.
 *
 * @returns
 *     the sum of all incoming numbers.
 */
function restSum(...otherNums) {
  // Your code here
  return otherNums.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;