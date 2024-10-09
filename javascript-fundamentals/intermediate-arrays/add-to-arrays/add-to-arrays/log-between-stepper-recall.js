// Examples:

/**
 * This function takes in 3 numbers as parameters. The
 * function should print out numbers between min and max
 * at step intervals. See the following examples.
 * 
 * @param {number} min
 *     This is the minimum number
 *
 * @param {number} max
 *     This is the maximum number
 *
 * @param {number} step
 *     This is the single step while moving from min
 *     to max
 */
function logBetweenStepper (min, max, step) {
  let index = min;
	while (index <= max) {
		console.log(index);
		index += step;
	}
}

logBetweenStepper(5, 9, 1); // prints out:
// 5;
// 6;
// 7;
// 8;
// 9;

logBetweenStepper(-10, 15, 5);
// -10
// -5
// 0
// 5
// 10
// 15
