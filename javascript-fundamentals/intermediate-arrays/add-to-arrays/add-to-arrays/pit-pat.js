// your code here

/**
 * This function accepts a number as an arg. The function
 * should return an array containing all positive numbers
 * less than or equal to max that are divisible by either
 * 4 or 6, but not both.
 *
 * @param {number} max
 *     This is the maximum number to get pitpat numbers
 *     less than or equal to it.
 *
 * @returns
 *     an array containing all positive numbers less than
 *     or equal to max that are divisible by either 4 or 6,
 *     but not both.
 */
function pitPat(max) {
	let arr = [];

	for (let i = 0; i <= max; i++) {
		if (i % 4 === 0 && i % 6 !== 0) {
			arr.push(i);
		} else if (i % 6 === 0 && i % 4 !== 0) {
			arr.push(i);
		}
	}

	return arr;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
