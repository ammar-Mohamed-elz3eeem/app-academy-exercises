/**
 * This function takes in 3 numbers as parameters.
 * The function should print out numbers between
 * min and max at step intervals.
 *
 * @param {number} min
 *     This is the minimum number to start from.
 *
 * @param {number} max
 *     This is the maximum number to reach.
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

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5;
// 6;
// 7;
// 8;
// 9;

logBetweenStepper(-10, 15, 5) // prints out:
// -10
// -5;
// 0;
// 5;
// 10;
// 15;
