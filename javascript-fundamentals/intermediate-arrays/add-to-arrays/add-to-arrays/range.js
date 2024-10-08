// your code here

/**
 * This function takes in two numbers. The function should
 * return an array containing all numbers from min to max
 * inclusive.
 *
 * @param {number} min
 *     This is the minimum number to be in array.
 *
 * @param {number} max
 *     This is the maximum number to be in array.
 *
 * @returns
 *     an array containing all numbers from min to max
 *     inclusive.
 */
const range = function (min, max) {
  let newArr = [];

  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  return newArr;
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
