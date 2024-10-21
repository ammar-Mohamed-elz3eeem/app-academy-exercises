/**
 * This function determines the smallest number of two
 * given numbers.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the smallest number of two given numbers.
 */
function min(num1, num2) {
	if (num1 > num2) {
		return num2;
	}
	return num1;
}

/**
 * This function determines the biggest number of two
 * given numbers.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the biggest number of two given numbers.
 */
function max(num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	return num2;
}

/**
 * This function multiplies the biggest number of two
 * numbers by two and return the result.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the biggest number between two numbers multiplied
 *     by two.
 */
function multiplyBiggerNumByTwo(num1, num2) {
	return max(num1, num2) * 2;
}

/**
 * This function divides the biggest number of two
 * numbers by three and return the result.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the biggest number between two numbers divided
 *     by three.
 */
function divideBiggerNumByThree(num1, num2) {
	return max(num1, num2) / 3;
}

/**
 * This function returns a string based on bigger
 * sum of the given two sums.
 *
 * @param {number} sum1
 *     This is the first sum.
 *
 * @param {number} sum2
 *     This is the second sum.
 *
 * @returns
 *     a string based on bigger sum of the given
 *     two sums.
 */
function eatMostTacos(sum1, sum2) {
	return `I ate ${max(sum1, sum2)} tacos.`;
}

/**
 * This function returns a string based on smaller
 * weight of the given two weights.
 *
 * @param {number} weight1
 *     This is the first weight.
 *
 * @param {number} weight2
 *     This is the second weight.
 *
 * @returns
 *     a string based on smaller weight of the given
 *     two weights.
 */
function adoptSmallerDog(weight1, weight2) {
	return `I adopted a dog that weighs ${min(weight1, weight2)} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
	multiplyBiggerNumByTwo,
	divideBiggerNumByThree,
	eatMostTacos,
	adoptSmallerDog,
};
