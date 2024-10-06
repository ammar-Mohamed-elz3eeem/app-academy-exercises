/**
 * This function takes in a string and returns the number 
 * of times that the same letter repeats twice in a row.
 *
 * @param {string} string
 *     The string to make the check on.
 *
 * @returns
 *     the number of times that the same letter repeats
 *     twice in a row.
 */
function doubleLetterCount (string) {
  // your code here
  let numberOfDoubles = 0;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      numberOfDoubles += 1;
      ++i;
    }
  }

  return numberOfDoubles;
}

console.log(doubleLetterCount("the jeep rolled down the hill")); // 3
console.log(doubleLetterCount("bootcamp")); // 1
