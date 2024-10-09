/**
 * This function returns an array containing all the factors
 * of the given number.
 *
 * @param {number} num
 *     This is the number to get its factors.
 *
 * @returns
 *     an array containing all the factors of the given
 *     number.
 */
function factorsOf(num) {
	const factors = [];

	for (i = 1; i * i <= num; i++) {
		if (num % i === 0) {
			factors.push(i);
			if (i * i != num) {
				factors.push(num / i);
			}
		}
	}

	return factors;
}

/**
 * This function accepts two numbers as arguments. The function
 * should return an array containing positive numbers that are
 * able to divide both arguments.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     an array containing positive numbers that are able to divide
 *     both arguments.
 */
function commonFactors (num1, num2) {
  const commonFactorsArr = [];

  if (num1 > num2) {
    const num2Factors = factorsOf(num2);
    for (let i = 0; i < num2Factors.length; i++) {
      if (num1 % num2Factors[i] === 0) {
        commonFactorsArr.push(num2Factors[i]);
      }
    }
  } else {
    const num1Factors = factorsOf(num1);
		for (let i = 0; i < num1Factors.length; i++) {
			if (num2 % num1Factors[i] === 0) {
				commonFactorsArr.push(num1Factors[i]);
			}
		}
  }

  return commonFactorsArr;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]
