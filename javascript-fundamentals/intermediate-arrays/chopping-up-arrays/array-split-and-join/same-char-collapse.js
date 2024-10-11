/**
 * This function takes in a string and returns a collapsed
 * version of the string. To collapse the string, we
 * repeatedly delete 2 adjacent characters that are the same
 * until there are no such adjacent characters. If there are
 * multiple pairs that can be collapsed, delete the leftmost
 * pair. For example, we take the following steps to collapse
 * "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
 *
 * @param {string} str
 *     This is the string to collapse.
 *
 * @returns
 *     a collapsed version of the string.
 */
function sameCharCollapse (str) {
  // your code here
  const strAsArr = str.split("");

  for (let i = 1; i < strAsArr.length; i++) {
    const char = strAsArr[i];
    const prevChar = strAsArr[i - 1];
    if (char === prevChar) {
      strAsArr.splice(i - 1, 2);
      i -= 2;
    }
  }

  return strAsArr.join("");
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
