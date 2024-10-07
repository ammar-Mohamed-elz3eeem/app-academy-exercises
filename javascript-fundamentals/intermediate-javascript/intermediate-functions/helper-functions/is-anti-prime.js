// Your code here

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
function factors (num) {
  const factors = [];

  for (i = 2; i * i <= num; i++) {
		if (num % i === 0) {
      factors.push(i);
      if (i * i != num) {
				factors.push(num / i);
			}
    }
  }

  return factors;
}

/**
 * accepts a number as an argument. The method should
 * return true if the given number has more divisors
 * than all positive numbers less than the given number.
 * For example, 24 is an anti-prime because it has more
 * divisors than any positive number less than 24.
 *
 * @param {number} num
 *     This is the number to test if anti prime or not.
 *
 * @returns
 *     return true if the given number has more divisors
 *     than all positive numbers less than the given number.
 */
function isAntiPrime (num) {
  const numFactors = factors(num);

  for (let i = num - 1; i > 0; i--) {
    const currentNumberFactors = factors(i);
    if (currentNumberFactors.length > numFactors.length)
      return false;
  }

  return true;
}

console.log(isAntiPrime(24)); // true
console.log(isAntiPrime(36)); // true
console.log(isAntiPrime(48)); // true
console.log(isAntiPrime(360)); // true
console.log(isAntiPrime(1260)); // true
console.log(isAntiPrime(27)); // false
console.log(isAntiPrime(5)); // false
console.log(isAntiPrime(100)); // false
console.log(isAntiPrime(136)); // false
console.log(isAntiPrime(1024)); // false
