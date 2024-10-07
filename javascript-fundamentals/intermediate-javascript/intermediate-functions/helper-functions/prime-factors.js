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
 * function should return an array containing all of
 * the prime numbers that can divide the given number.
 *
 * @param {number} num
 *     This is the number to get it prime factors.
 *
 * @returns
 *     return an array containing all of the prime numbers
 *     that can divide the given number.
 */
function primeFactors (num) {
  let i;
  let primeFactors = [];
  const start = performance.now();

  if (isPrime(num)) {
    return [num];
  }
  
  for (i = 2; i * i < num; i++) {
    if (num % i === 0) {
      if (isPrime(i)) {
        primeFactors.push(i);
      }
      if (isPrime(num / i)) {
        primeFactors.push(num / i);
      }
    }
  }

  if (isPrime(i)) {
    primeFactors.push(i);
  }
  
  const end = performance.now();
  console.log(end - start);

  return primeFactors;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
console.log(primeFactors(2040)); // [2, 3, 5, 17]
console.log(primeFactors(25698751)); // [13, 23, 61, 1409]
console.log(primeFactors(2825899338)); // [2, 3, 109, 269, 16063]
