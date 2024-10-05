/**
 * This function calculates the average of the two
 * given numbers by adding them together then divide
 * the result by two.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the average of the two given numbers by adding
 *     them together then divide the result by two.
 */
function averageOfTwo (num1, num2) {
  return (num1 + num2) / 2;
}

console.log(averageOfTwo(3, 7)); // => 5
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75
