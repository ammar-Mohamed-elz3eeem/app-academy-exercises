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

  if (num % 3 === 0 || num % 2 === 0)
    return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0)
      return false;
  return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
