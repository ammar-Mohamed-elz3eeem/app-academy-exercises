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
function isPrime (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0)
    return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0)
      return false;
  }

  return true;
}

/**
 * This function takes in an array of numbers and returns
 * a new array containing only the prime numbers.
 *
 * @param {Array<number>} array
 *     This is the array to pick prime numbers.
 *
 * @returns
 *     a new array containing only the prime numbers.
 */
function pickPrimes(array) {
  // your code here
  let primeNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      primeNumbers.push(array[i]);
    }    
  }

  return primeNumbers;
}

console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]
