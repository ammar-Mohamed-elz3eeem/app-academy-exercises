/**
 * This function takes in a matrix and a number which represents
 * column index and returns the maximum number in that column.
 *
 * @param {Array<Array<number>>} matrix
 *     This is the matrix to get the column.
 *
 * @param {number} column
 *     This is the column to get all element in that position
 *     from the matrix.
 *
 * @returns
 *     the maximum number in the matrix in the given column.
 */
function maxInColumn(matrix, column) {
  let maxNumber = matrix[0][column];

  for (let i = 0; i < matrix.length; i++) {
    const currentNumber = matrix[i][column];
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}

/**
 * This function takes in a matrix and a number which represents
 * row index and returns the minimum number in that row.
 *
 * @param {Array<Array<number>>} matrix
 *     This is the matrix to get the minium number.
 *
 * @param {number} column
 *     This is the column to get all element in that position
 *     from the matrix.
 *
 * @returns
 *     the minimum number in the matrix in the given row.
 */
function minInRow(matrix, row) {
  let minNumberPos = 0;

  for (let i = 0; i < matrix[row].length; i++) {
    const currentNumber = matrix[row][i];
    if (currentNumber < matrix[row][minNumberPos]) {
      minNumberPos = i;
    }
  }

  return minNumberPos;
}

/**
 * This function takes in a 2-dimensional array (matrix) and
 * returns all lucky numbers in any order. A lucky number is
 * the minimum element in its row and the maximum in its
 * column.
 *
 * @param {Array<Array<number>>} matrix
 *     This is the matrix to extract lucky number from.
 *
 * @returns
 *     all lucky numbers in any order.
 */
function luckyNumbers (matrix) {
  // your code here...
  const luckyNums = [];

  for (let i = 0; i < matrix.length; i++) {
    const subArray = matrix[i];
    let minNumberInRowPos = minInRow(matrix, i);
    let minNumberInRow = matrix[i][minNumberInRowPos];
    let maxNumberInColumn = maxInColumn(matrix, minNumberInRowPos);
    for (let j = 0; j < matrix[i].length; j++) {
      if (maxNumberInColumn === minNumberInRow && minNumberInRow === matrix[i][j]) {
        luckyNums.push(matrix[i][j]);
      }
    }
  }

  return luckyNums;
}

matrix = [
	[5, 9, 21],
	[9, 19, 6],
	[12, 14, 15],
];
console.log(luckyNumbers(matrix)); // [12]

matrix = [
	[5, 10, 8, 6],
	[10, 2, 7, 9],
	[21, 15, 19, 10],
];
console.log(luckyNumbers(matrix)); // [10]
