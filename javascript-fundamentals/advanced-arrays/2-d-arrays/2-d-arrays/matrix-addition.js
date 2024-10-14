// Your code here

/**
 * This function accepts two matrices as arguments. The two
 * matrices are guaranteed to have the same "height" and
 * "width". The function should return a new matrix
 * representing the sum of the two arguments. To add matrices,
 * we add the values at the same positions.
 *
 * @param {Array<Array<number>>} matrix1
 *     This is the first matrix to add.
 *
 * @param {Array<Array<number>>} matrix2
 *     This is the second matrix to add.
 *
 * @returns {Array<Array<number>>}
 *     a new matrix representing the sum of the two arguments.
 */
function matrixAddition (matrix1, matrix2) {
  const newMatrix = [];

  for (let i = 0; i < matrix1.length; i++) {
    const subArray = matrix1[i];
    const newSubArray = [];

    for (let j = 0; j < matrix1[i].length; j++) {
      const firstNumber = matrix1[i][j];
      const secondNumber = matrix2[i][j];
      newSubArray.push(firstNumber + secondNumber);
    }

    newMatrix.push(newSubArray);
  }

  return newMatrix;
}

let matrixA = [
	[2, 5],
	[4, 7],
];
let matrixB = [
	[9, 1],
	[3, 0],
];
let matrixC = [
	[-1, 0],
	[0, -1],
];
let matrixD = [
	[2, -5],
	[7, 10],
	[0, 1],
];
let matrixE = [
	[0, 0],
	[12, 4],
	[6, 3],
];

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
