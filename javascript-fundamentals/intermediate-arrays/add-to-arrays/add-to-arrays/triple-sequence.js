// Your code here

/**
 * takes in two numbers, start and length. The function
 * should return an array representing a sequence that
 * begins with start and is length elements long. In the
 * sequence, every element should be 3 times the previous
 * element. Assume that the length is at least 1.
 *
 * @param {number} base
 *     This is the base number which represents the first
 *     element in the returned array.
 *
 * @param {number} length
 *     This is the length required for the array.
 *
 * @returns
 *     an array representing a sequence that begins with
 *     start and is length elements long. In the sequence,
 *     every element should be 3 times the previous element.
 *     Assume that the length is at least 1.
 */
function tripleSequence(base, length) {
	let arr = [];
	let nextValue = base;

	for (let i = 1; i <= length; i++) {
		arr.push(nextValue);
		nextValue *= 3;
	}

	return arr;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
