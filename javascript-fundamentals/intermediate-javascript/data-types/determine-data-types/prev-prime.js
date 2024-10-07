// Your code here

/**
 * This function returns true if number is prime. Otherwise,
 * false. A number is prime if it is only divisible by 1 and
 * itself.
 *
 * @param {number} number
 *     This is the number to check if it is prime or not.
 *
 * @returns
 *     True if number is prime. False otherwise.
 */
function isPrime(number) {
	if (number <= 1) return false;
	if (number <= 3) return true;

	if (number % 2 === 0 || number % 3 === 0) return false;

	for (let i = 5; i * i <= number; i += 6) {
		if (number % i === 0 || number % (i + 2) === 0) return false;
	}

	return true;
}

/**
 * This function accepts a number as an argument. The
 * function should return the nearest prime number that
 * is smaller than the given number.
 *
 * @param {number} num
 *     This is the number which we need prime number
 *     smaller than it.
 *
 * @returns
 *     the nearest prime number that is smaller than the
 *     given number.
 */
function prevPrime (num) {
  if (num <= 2) return null;

	let prevNumber = num - 1;

	while (!isPrime(prevNumber)) {
		prevNumber--;
	}

	return prevNumber;
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
