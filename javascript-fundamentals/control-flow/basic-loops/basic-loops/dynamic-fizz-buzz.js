/**
 * This function accepts three arguments (max, num1, and num2).
 * The function should return an array containing positive
 * numbers less than max that are divisible by num1 or num2,
 * but not both.
 *
 * @param {number} max
 *     This is the maximum number to reach.
 *
 * @param {number} num1
 *     This is the first number which is used to check for
 *     divisibility.
 *
 * @param {number} num2
 *     This is the second number which is used to check for
 *     divisibility.
 *
 * @returns
 *     an array containing positive numbers less than max that
 *     are divisible by num1 or num2, but not both.
 */
function dynamicFizzBuzz (max, num1, num2) {
  let index = 0;
  const arr = [];
	while (index < max) {
		if (index % num1 === 0 && index % num2 !== 0)
      arr.push(index);
		else if (index % num2 === 0 && index % num1 !== 0)
      arr.push(index);

		index++;
  }
  return arr;
}

console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]
