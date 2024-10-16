/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

/**
 * This function takes in an array of numbers
 * and returns c.
 *
 * @param {Array} array
 *     This is the array of numbers to get its
 *     average.
 *
 * @returns
 *     The average number.
 */
const arrowAvgValue = array => {
  // Your code here
  const sum = array.reduce((acc, curr) => acc + curr);
  const length = array.length
  return sum / length;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowAvgValue;
} catch (e) {
  return null;
}