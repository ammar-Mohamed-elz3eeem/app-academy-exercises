// your code here

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
function isPrime (number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0)
    return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0)
      return false;
  }

  return true;
}

/**
 * This function takes in an array of numbers as args. The
 * function should return a new array containing the primes
 * from the original array. A prime number is a number that
 * is only divisible by 1 and itself.
 *
 * @param {Array} array
 *     This is the array to pick primes from.
 *
 * @returns
 *     return a new array containing the primes from the
 *     original array
 */
function choosePrimes (array) {
  let primes = [];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
