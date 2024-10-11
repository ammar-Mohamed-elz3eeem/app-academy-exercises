/**
 * This function takes in an array and a number as args.
 * When the num is positive, the elements of the array
 * should be rotated to the right. When the num is
 * negative, the elements of the array should be rotated
 * to the left. The function should mutate the original
 * array.
 *
 * @param {Array<number>} array
 *     This is the array to rotate.
 *
 * @param {number} num
 *     This is the number of rotation rounds.
 */
function rotate (array, num) {
  if (num < 0) {
    for (let i = num; i < 0; i++) {
      array.push(array.shift());
    }
  } else {
    for (let i = num; i > 0; i--) {
			array.unshift(array.pop());
		}
  }
}

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
