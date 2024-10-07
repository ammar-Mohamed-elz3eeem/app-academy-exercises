// Your code here

/**
 * This function takes in an array of numbers and returns
 * the sum of the first and last element if there is an
 * even number of elements in the array. If there is an
 * odd number of elements in the array, then the function
 * should return the difference between the first and last
 * elements of the array.
 *
 * @param {Array} array
 *     This is the array to do operation on its first and
 *     last element of it.
 *
 * @returns
 *     returns the sum of the first and last element if
 *     there is an even number of elements in the array.
 *     If there is an odd number of elements in the array,
 *     then the function should return the difference
 *     between the first and last elements of the array.
 */
function firstAndLast (array) {
  let first = array[0];
  let last = array[array.length - 1];
  return array.length % 2 === 0 ? first + last : first - last;
}

console.log(firstAndLast([1, 2, 3, 4])); // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5])); // 17
console.log(firstAndLast([12])); // 0
console.log(firstAndLast([7, 11, 3])); // 4
