// your code here

/**
 * This function accepts a string. The function should
 * return a boolean indicating whether the string contains
 * two of the same character consecutively. If the value
 * passed into the function is not a string, return null.
 *
 * @param {string} word
 *     This is the string to check.
 *
 * @returns
 *     return a boolean indicating whether the string contains
 *     two of the same character consecutively. If the value
 *     passed into the function is not a string, return null.
 */
function hasDoubleLetter (word) {
  if (typeof word !== 'string')
    return null;

  for (let i = 1; i < word.length; i++) {
    const letter = word[i];
    const prevLetter = word[i - 1];
    if (letter === prevLetter)
      return true;
  }

  return false;
}

console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null
