/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here

/**
 * This function determine if the input array is sorted
 * in ascending order.
 *
 * @param {Array} array
 *     This is teh array to check if sorted or not.
 *
 * @returns
 *     a boolean indicating wether or not the input array
 *     is sorted in ascending order.
 */
function isSorted(array) {
  if (array.length === 1)
    return true;
  return array[0] <= array[1] && isSorted(array.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
