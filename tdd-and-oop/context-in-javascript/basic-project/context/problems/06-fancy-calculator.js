// Your code here
const Calculator = require('./02-calculator')

class FancyCalculator extends Calculator {
	/**
	 * This function sets the total to the newTotal.
	 *
	 * @param {number} newTotal
	 *     This is the newTotal to assign to the total.
	 *
	 * @returns
	 *     The total after being assigned.
	 */
	setTotal(newTotal) {
		this.total = newTotal;
		return this.total;
	}

	/**
	 * This function sets the total to the remainder of
	 * dividing by num.
	 *
	 * @param {number} num
	 *     This is the number to get the remainder after
	 *     dividing the total with it.
	 *
	 * @returns
	 *     The total after being module by the given
	 *     number.
	 */
	modulo (num) {
		this.total %= num;
		return this.total;
	}

	/**
	 * This function multiplies the total by its self
	 * and returns the total after being squared.
	 *
	 * @returns
	 *     the total after being squared.
	 */
	squared () {
		this.total *= this.total;
		return this.total;
	}
}

// let fancyCalculator = new FancyCalculator();
// console.log(fancyCalculator.setTotal(5)); // => 5
// console.log(fancyCalculator.squared());   // => 25
// console.log(fancyCalculator.modulo(4));   // => 1
// console.log(fancyCalculator.total)        // => 1

// // can use instance methods on the Calculator class
// console.log(fancyCalculator.add(9))       // => 10


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}