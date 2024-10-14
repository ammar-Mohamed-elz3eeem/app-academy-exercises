// your code here

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
function sumArray(array) {
	// your code here...
	let totalSum = 0;

	for (let i = 0; i < array.length; i++) {
		totalSum += array[i];
	}

	return totalSum;
}

/**
 * This function takes in a 2D array of numbers and returns
 * the total sum of all numbers.
 *
 * @param {Array<Array<number>>} twoDimArr
 *     This is the 2D array to get sum of all its elements
 *
 * @returns
 *     the total sum of all numbers.
 */
function twoDimensionalSum (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const subArray = array[i];
    sum += sumArray(subArray);
  }

  return sum;
}

let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
console.log(twoDimensionalSum(arr2)); // 6
