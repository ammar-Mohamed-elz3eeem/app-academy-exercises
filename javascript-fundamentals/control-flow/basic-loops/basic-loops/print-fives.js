/**
 * This function prints out the multiples of 5 that
 * are less than max.
 *
 * @param {number} max
 *     This is the max number that when reached stop
 *     calculating more multiples.
 */
function printFives (max) {
  let currentNumber = 5;
  let index = 0;
  while ((currentNumber * index) < max) {
		console.log(currentNumber * index);
		index++;
	}
}

// Example
printFives(20); // prints out
// 0;
// 5;
// 10;
// 15;
