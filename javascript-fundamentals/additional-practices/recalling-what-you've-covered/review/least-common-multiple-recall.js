// your code here

/**
 * This function accepts two numbers as arguments. The functions
 * should return the smallest number that is divisible by both
 * num1 and num2.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the smallest number that is divisible by both num1 and num2.
 */
function leastCommonMultiple (num1, num2) {
  let i = 1;
  let greatest;

  if (num1 > num2) {
    greatest = num2 * i;
    while (greatest % num1 !== 0) {
			greatest = num2 * i;
			i++;
		}
  } else {
    greatest = num1 * i;
		while (greatest % num2 !== 0) {
			greatest = num1 * i;
			i++;
		}
  }

  return greatest;
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(7, 13)); // 91
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
