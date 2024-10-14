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
 * This function takes in a 2-dimensional array (matrix) and
 * returns an array containing the maximum value in each
 * column. The array length should be equal to the number of
 * columns, such that returnArray[i] is equal to the max
 * value in the ith column.
 *
 * @param {Array<Array<number>>} matrix
 *     This is the matrix to make calculations on.
 *
 * @returns
 *     an array containing the maximum value in each column.
 */
function maxColumn(matrix) {
  // your code here...
  const maxColumns = [];

  for (let i = 0; i < matrix.length; i++) {
    let long = matrix[i][0];

    for (let j = 0; j < matrix[i].length; j++) {
      if (long < matrix[j][i]) {
        long = matrix[j][i];
      }
    }

    maxColumns.push(long);
  }

  return maxColumns;
}


matrix = [
	[5, 9, 21],
	[9, 19, 6],
	[12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
