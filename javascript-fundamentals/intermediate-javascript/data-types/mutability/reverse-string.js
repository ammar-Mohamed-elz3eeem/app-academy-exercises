/**
 * This function takes in a string. The function should
 * return a new string where the order of the characters
 * is reversed.
 *
 * @param {string} str
 *     This is the string to reverse.
 *
 * @returns
 *     a new string where the order of the characters
 *     is reversed.
 */
function reverseString (str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    newStr = letter + newStr;
  }

  return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
