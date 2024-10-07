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
 * This function takes in an array of numbers. The
 * function should return the element of the array
 * that is equal to half of the sum of all elements
 * of the array. If there is no such element, the
 * method should return null.
 *
 * @param {Array} arr
 *     This is the array to operate on.
 *
 * @returns
 *     the element of the array that is equal to half
 *     of the sum of all elements of the array. If
 *     there is no such element, the method should
 *     return null.
 */
function allElseEqual(arr) {
  // your code here
  
  const sum = sumArray(arr);
  const halfOfArraySum = sum / 2;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === halfOfArraySum) {
      return element;
    }
  }

  return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null
