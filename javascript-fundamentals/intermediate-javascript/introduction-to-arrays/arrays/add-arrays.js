/**
 * This function takes in two arrays of numbers and
 * returns the two arrays combined into a single array.
 *
 * @param {Array} array1
 *     This is the first array to be combined.
 *
 * @param {Array} array2
 *     This is the second array to be combined.
 *
 * @returns
 *     the two arrays combined into a single array.
 */
function combineArray (array1, array2) {
  // your code here...
  return array1.concat(array2);
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]
