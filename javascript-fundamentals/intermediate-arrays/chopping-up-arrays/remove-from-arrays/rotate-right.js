// your code here

/**
 * This function takes in an array and a number as args.
 * The function should return a new array where the
 * elements of the array are rotated to the right num
 * times. The function should not mutate the original
 * array and instead return a new array.
 *
 * @param {Array<number>} array
 *     This is the array to rotate.
 *
 * @param {number} rotateRounds
 *     This is the number of rotate rounds
 *
 * @returns
 *     a new array where the elements of the array are
 *     rotated to the right num times.
 */
function rotateRight (array, rotateRounds) {
	return [].concat(
		array.slice(array.length - rotateRounds),
		array.slice(0, array.length - rotateRounds)
	);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]