// your code here

/**
 * This function accepts a number as an arg. The function
 * should return an array containing all positive numbers
 * less than max that are divisible by either 3 or 5, but
 * not both.
 *
 * @param {number} max
 *     This is the number to get fizzBuzz numbers to it.
 *
 * @returns
 *     an array containing all positive numbers less than max
 *     that are divisible by either 3 or 5, but not both.
 */
function fizzBuzz (max) {
  const fizzBuzzNumbers = [];

  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
			fizzBuzzNumbers.push(i);
		} 
  }

  return fizzBuzzNumbers;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
