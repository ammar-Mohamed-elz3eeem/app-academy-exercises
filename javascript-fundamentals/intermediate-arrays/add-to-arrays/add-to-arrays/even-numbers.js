// your code here

/**
 * This function takes in a number as an arg. The function
 * should return an array containing all positive, even
 * numbers that are less than max.
 *
 * @param {number} num
 *     This is the maximum number which we need to get even
 *     numbers that are less than this.
 *
 * @returns
 *     an array containing all positive, even numbers that
 *     are less than max.
 */
function evenNumbers (num) {
  let evens = [];

  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }

  return evens;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
