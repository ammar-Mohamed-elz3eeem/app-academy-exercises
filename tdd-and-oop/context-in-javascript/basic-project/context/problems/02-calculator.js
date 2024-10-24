// Your code here
class Calculator {
	/**
	 * This is the default constructor for the Calculator.
	 */
	constructor() {
		this.total = 0;
	}

	/**
	 * This function adds the given number to the total
	 * number
	 *
	 * @param {number} num
	 *     This is the number to add to total number.
	 *
	 * @returns
	 *     the total after adding the given num to it.
	 */
	add(num) {
		this.total += num;
		return this.total;
	}

	/**
	 * This function subtracts the given number from the total
	 * number
	 *
	 * @param {number} num
	 *     This is the number to subtracts from total number.
	 *
	 * @returns
	 *     the total after subtracting the given num from it.
	 */
	subtract(num) {
		this.total -= num;
		return this.total;
	}

	/**
	 * This function divides the total number by the given
	 * number.
	 *
	 * @param {number} num
	 *     This is the number used to divide total number.
	 *
	 * @returns
	 *     the total after dividing by the given num.
	 */
	divide(num) {
		this.total /= num;
		return this.total;
	}

	/**
	 * This function multiplies the total number by the
	 * given number.
	 *
	 * @param {number} num
	 *     This is the number used to multiply total number.
	 *
	 * @returns
	 *     the total after multiplies by the given num.
	 */
	multiply(num) {
		this.total *= num;
		return this.total;
	}
}

// let calculator = new Calculator();
// console.log(calculator.add(50));      // => 50
// console.log(calculator.subtract(35)); // => 15
// console.log(calculator.multiply(10)); // => 150
// console.log(calculator.divide(5));    // => 30
// console.log(calculator.total)         // => 30

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}