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
 * This function accepts an array as an arg. The function
 * should return the average of all values in the array.
 * If the array is empty, it should return null.
 *
 * @param {Array} array
 *     This is the array to get its average value.
 *
 * @returns
 *     the average of all values in the array. If the array
 *     is empty, it should return null.
 */
function avgVal (array) {
  if (array.length === 0)
    return null;

  let sum = sumArray(array);
  let len = array.length;

  return sum / len;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
