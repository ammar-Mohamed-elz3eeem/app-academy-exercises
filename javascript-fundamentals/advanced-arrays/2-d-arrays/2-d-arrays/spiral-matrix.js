/**
 * This function takes in a 2-dimensional array (matrix) and
 * returns an array containing the elements in spiral order.
 *
 * @param {Array<Array<number>>} matrix
 *     This is the matrix to read in spiral order.
 *
 * @returns
 *     an array containing the elements in spiral order.
 */
function spiralOrder (matrix) {
  const spiralArray = [];
  let height = matrix.length - 1;
  let width = matrix[0].length - 1;
  let left = 0, top = 0;

  while (left <= width && top <= height) {
    for (let i = left; i <= width; i++) {
      spiralArray.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= height; i++) {
      spiralArray.push(matrix[i][width]);
    }
    width--;

    if (top <= height) {
      for (let i = width; i >= left; i--) {
        spiralArray.push(matrix[height][i]);
      }
      height--;
    }

    if (left <= width) {
      for (let i = height; i >= top; i--) {
        spiralArray.push(matrix[i][left]);
      }
      left++;
    }
  }

  return spiralArray;
}

matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [
	[1, 2, 3, 4, 5],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [
	[1, 2, 3, 4, 5],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24],
];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
