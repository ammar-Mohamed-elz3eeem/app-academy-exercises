// Your code here

/**
 * This function accepts an array of numbers as an argument.
 * The function should return a new array containing the sum
 * of each pair of elements in the input array.
 *
 * @param {Array<number>} array
 *     This is the array to sum its elements.
 *
 * @returns
 *     a new array containing the sum of each pair of elements
 *     in the input array.
 */
function adjacentSums (array) {
  let $sums = [];

  for (let i = 1; i < array.length; i++) {
    $sums.push(array[i] + array[i - 1]);
  }

  return $sums;
}

console.log(adjacentSums([3, 8, 7, 1])); // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9])); // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3])); // [-1, 0]
