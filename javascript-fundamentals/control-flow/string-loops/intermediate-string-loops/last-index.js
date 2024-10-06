/**
 * This function takes in a string and a character. The
 * function should return the last index where the
 * character can be found in the string.
 *
 * @param {string} str
 *     This is the string to search for the given
 *     character in.
 *
 * @param {string} char
 *     This is the character to search for.
 *
 * @returns
 *     the last index where the character can be found
 *     in the string.
 */
function lastIndex (str, char) {
  // your code here
  let last = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      last = i;
    }
  }

  return last >= 0 ? last : -1;
}

console.log(lastIndex("abca", "a")); // 3
console.log(lastIndex("mississipi", "i")); // 9
console.log(lastIndex("octagon", "o")); // 5
console.log(lastIndex("programming", "m")); // 7
