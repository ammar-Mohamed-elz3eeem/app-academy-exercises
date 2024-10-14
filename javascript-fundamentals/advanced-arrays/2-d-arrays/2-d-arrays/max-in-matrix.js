// your code here

/**
 * This function takes in an array of numbers and returns
 * the largest value in the array.
 *
 * @param {Array} array
 *     This is the array to find maximum number in.
 *
 * @returns
 *     the largest value in the array.
 */
function maxInArray(array) {
	// your code here...
	let maxNumber = array[0];

	for (let i = 1; i < array.length; i++) {
    const currentNumber = array[i];
    if (maxNumber < currentNumber) {
      maxNumber = currentNumber;
    }
	}

	return maxNumber;
}

/**
 * This function takes in a 2-dimensional array (matrix)
 * and returns the largest value in the matrix. The matrix
 * contains at least one value.
 *
 * @param {Array<Array<number>>} matrix
 *     This is the matrix to find maximum number in it.
 *
 * @returns
 *     the largest value in the matrix. The matrix contains
 *     at least one value.
 */
function maxInMatrix(matrix) {
  // your code here...
  let maxNumber = maxInArray(matrix[0]);

  for (let i = 1; i < matrix.length; i++) {
		const currentNumber = maxInArray(matrix[i]);
		if (maxNumber < currentNumber) {
			maxNumber = currentNumber;
		}
	}

  return maxNumber;
}

matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
