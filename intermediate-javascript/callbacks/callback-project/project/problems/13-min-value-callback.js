/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

/**
 * This function accepts an array and an optional
 * callback as arguments. If a callback is not
 * passed in, then the function should return the
 * smallest value in the array. If a callback is
 * passed in, then the function should return the
 * result of the smallest value being passed into
 * the given callback.
 *
 * @param {Array<number>} array
 *     This is the array to get smallest element from.
 *
 * @param {CallableFunction} cb
 *     This is an optional callback to run on smallest
 *     value extracted from array.
 *
 * @returns
 *     the smallest value in the array. If a callback is
 *     passed in, then the function should return the
 *     result of the smallest value being passed into
 *     the given callback.
 */
let minValueCallback = function(array, cb) {
  let smallest = array[0];

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    if (current < smallest) {
      smallest = current;
    }
  }

  if (cb !== undefined) {
    return cb(smallest);
  } else {
    return smallest;
  }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
