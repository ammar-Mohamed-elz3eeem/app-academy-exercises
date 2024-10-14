/**
 * This function takes in an array of numbers representing the base
 * of a pyramid. The function should return a two-dimensional array
 * representing the completed pyramid. To generate an element of the
 * next level of the pyramid, we sum the elements below and to the
 * left and below and to the right.
 *
 * @param {Array<number>} array
 *     This is the pyramid base from which to create the pyramid
 *     array
 *
 * @returns
 *     The pyramid array for the given pyramid base.
 */
function pyramidArray (array) {
  const pyramid = [array];
  let pyramidLength = array.length - 1;

  // for (let i = 0; i < pyramidLength - 1; i++) {
    
  // }

  while (pyramidLength > 0) {
    const nextElement = [];
		for (let j = 0; j < pyramid[0].length - 1; j++) {
			nextElement.push(pyramid[0][j] + pyramid[0][j + 1]);
		}
		pyramid.unshift(nextElement);
    pyramidLength--;
  }

  return pyramid;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]
