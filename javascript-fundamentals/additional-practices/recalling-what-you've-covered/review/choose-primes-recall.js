// your code here

/**
 * This function returns true if number is prime. Otherwise,
 * false. A number is prime if it is only divisible by 1 and
 * itself.
 *
 * @param {number} num
 *     This is the number to check.
 *
 * @returns
 *     true if the given number is prime number, false
 *     otherwise.
 */
function isPrime(num) {
	if (num <= 1) return false;
	if (num <= 3) return true;

	if (num % 2 === 0 || num % 3 === 0) return false;

	for (let i = 5; i * i < num; i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) return false;
	}

	return true;
}

/**
 * This function takes in an array of numbers as args. The
 * function should return a new array containing the primes
 * from the original array. A prime number is a number that
 * is only divisible by 1 and itself.
 *
 * @param {Array<number} nums
 *     This is the numbers array to extract primes from.
 *
 * @returns
 *     a new array containing the primes from the original
 *     array.
 */
function choosePrimes(nums) {
	const primes = [];

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		if (isPrime(currentNumber)) {
			primes.push(currentNumber);
		}
	}

	return primes;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
