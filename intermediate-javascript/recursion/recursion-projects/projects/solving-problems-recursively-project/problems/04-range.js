/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here

/**
 * This function takes a start and an end and returns an
 * array of all numbers in that range, exclusive. If the
 * end number is less than the start, return an empty
 * array.
 *
 * @param {number} start
 *     This is the min value in the range.
 *
 * @param {number} end
 *     This is the max value in the range.
 *
 * @returns
 *     an array of all numbers in that range, exclusive. If 
 *     the end number is less than the start, return an empty
 *     array.
 */
function range(start, end) {
  if (start >= end) return [];
  return [start].concat(range(start + 1, end));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
