// your code here

/**
 * This function returns an array containing all the factors
 * of the given number.
 *
 * @param {number} num
 *     This is the number to get its factors.
 *
 * @returns
 *     an array containing all the factors of the given
 *     number.
 */
function factorsOf(num) {
	const factors = [];

	for (i = 1; i * i <= num; i++) {
		if (num % i === 0) {
			factors.push(i);
			if (i * i != num) {
				factors.push(num / i);
			}
		}
	}

	return factors;
}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
