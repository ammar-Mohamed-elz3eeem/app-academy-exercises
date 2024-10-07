/**
 * This function takes in an array of numbers and returns
 * the total sum of all the numbers.
 *
 * @param {Array} array
 *     This is the array to sum its elements.
 *
 * @returns
 *     the total sum of all the numbers.
 */
function sumArray (array) {
  // your code here...
  let totalSum = 0;

  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
	}

  return totalSum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
