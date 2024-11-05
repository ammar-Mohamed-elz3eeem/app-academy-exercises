/**
 * This function takes in a number and check if the given number
 * is exactly equal to five or not.
 *
 * @param {number} num
 *     This is the number to check.
 *
 * @returns
 *     true if the given num is exactly equal to 5, false otherwise.
 */
function isFive (num) {
  // Your code here
  return num === 5;
}

/**
 * This function takes in a number and check if the given number
 * is odd number or not.
 *
 * @param {number} number
 *     This is the number to check.
 *
 * @returns
 *     true if the given number is odd number, false otherwise.
 */
function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new Error("input must be a number");
  }
  return number % 2 !== 0;
}

/**
 * This method takes in minimum number and maximum number that
 * represents a range of elements, and an optional argument step
 * which is the number to add every time to the minimum to reach
 * the maximum number, and returns an array containing these
 * numbers.
 *
 * @param {number} min
 *     This is the start number of the range.
 *
 * @param {number} max
 *     This is the max number of the range.
 *
 * @param {number} step
 *     This is the step to take to reach max number from
 *     min number
 *
 * @returns
 *     an array containing the numbers from the min to the
 *     max with the given step between the numbers.
 */
function myRange(min, max, step = 1) {
  // Your code here
  if (min > max)
    return [];

  const rangeArr = [];

  for (let i = min; i <= max; i += step) {
    rangeArr.push(i);
  }

  return rangeArr;
}


module.exports = { isFive, isOdd, myRange };