/**
 * This function reverses the given string and returns the
 * reversed version.
 *
 * @param {string} string
 *     This is the string to reverse.
 *
 * @returns
 *     The reversed version of the given string.
 */
function reverseString (string) {
  // Your code here
  if (typeof string !== "string") {
    throw new TypeError("input must be of type string");
  }

  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    newStr = char + newStr;
  }

  return newStr;
};

module.exports = reverseString;