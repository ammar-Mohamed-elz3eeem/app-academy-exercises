/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here

/**
 * This function takes in a string and returns it reversed.
 *
 * @param {string} str
 *     This is the string to reverse.
 *
 * @returns
 *     the given string but reversed.
 */
function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str[0];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
