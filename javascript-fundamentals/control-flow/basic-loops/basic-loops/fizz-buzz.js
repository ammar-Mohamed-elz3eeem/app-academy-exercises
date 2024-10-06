/**
 * This function takes a number and prints every
 * number from 0 to max (not inclusive) that is
 * divisible by either 3 or 5, but not both.\
 *
 * @param {number} max
 *     This is the maximum number to reach.
 */
function fizzBuzz (max) {
  let index = 0;
  while (index < max) {
    if (index % 5 === 0 && index % 3 !== 0) console.log(index);
		else if (index % 3 === 0 && index % 5 !== 0) console.log(index);
    index++;
  }
}

// Examples:
fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
