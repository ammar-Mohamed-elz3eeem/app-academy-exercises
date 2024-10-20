/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

***********************************************************************/

// your code here

/**
 * This function takes a single array with any number of
 * nested arrays and returns and array with all the nested
 * contents on one level.
 *
 * @param {Array} array
 *     This is the array to flatten.
 *
 * @returns
 *     the flattened version of the given array.
 */
function flatten(array, outputArray = []) {
  if (array.length === 0) return outputArray;

  if (Array.isArray(array[0])) {
    flatten(array[0], outputArray);
  } else {
    outputArray.push(array[0]);
  }

  return flatten(array.slice(1), outputArray);
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
