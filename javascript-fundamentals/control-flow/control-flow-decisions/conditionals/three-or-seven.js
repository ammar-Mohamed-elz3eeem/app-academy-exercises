/**
 * This function takes in a number and returns true if 
 * the number is divisible by either 3 or 7 and false
 * otherwise.
 *
 * @param {number} num
 *     This is the number to check.
 * 
 * @returns
 *     true if the number is divisible by either 3 or
 *     7 and false otherwise.
 */
function threeOrSeven (num) {
  // without if version
  // return num % 3 === 0 || num % 7 === 0;

  if (num % 3 === 0 || num % 7 === 0)
    return true;
  return false;
}

console.log(threeOrSeven(3)); // => true
console.log(threeOrSeven(42)); // => true
console.log(threeOrSeven(8)); // => false
