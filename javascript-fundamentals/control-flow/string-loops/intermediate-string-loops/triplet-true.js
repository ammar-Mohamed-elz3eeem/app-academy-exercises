// Your code here

/**
 * This function accepts a string as an argument. The
 * function should return a boolean indicating whether
 * or not the string contains three of the same
 * character consecutively.
 *
 * @param {string} word
 *     This is the word to make the check on it.
 *
 * @returns
 *     return a boolean indicating whether or not the
 *     string contains three of the same character
 *     consecutively.
 */
function tripletTrue (word) {
  let counter = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      counter += 1;
    }
    if (counter === 3)
      return true;
  }

  return false;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("e")); // false
