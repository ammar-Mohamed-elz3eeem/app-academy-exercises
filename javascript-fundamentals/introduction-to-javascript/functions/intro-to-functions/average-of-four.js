/**
 * This function calculates the average of the four
 * given numbers by adding them together then divide
 * the result by four.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @param {number} num3
 *     This is the third number.
 *
 * @param {number} num4
 *     This is the fourth number.
 *
 * @returns
 *     the average of the four given numbers by adding
 *     them together then divide the result by four.
 */
function averageOfFour(num1, num2, num3, num4) {
	return (num1 + num2 + num3 + num4) / 4;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5
