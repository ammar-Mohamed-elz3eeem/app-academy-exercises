/**
 * This function takes in a string and returns a "yelled"
 * version of that string. Yelled means all characters of
 * the string being converted to upper with string "!!!"
 * appended at the end.
 *
 * @param {string} str
 *     This is the string to convert to yelled version.
 *
 * @returns
 *     The yelled version of the current string.
 */
function yell(str) {
  return `${str.toUpperCase()}!!!`;
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"