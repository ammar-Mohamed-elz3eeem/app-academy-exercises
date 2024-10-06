/**
 * accepts two numbers as arguments. The function should
 * return the smallest number that is divisible by both
 * num1 and num2.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number
 *
 * @returns
 *     the smallest number that is divisible by both num1
 *     and num2.
 */
function leastCommonMultiple (num1, num2) {
  let index = 1;
  while ((num1 * index) % num2 !== 0) {
    index++;
  }
  return index * num1;
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
