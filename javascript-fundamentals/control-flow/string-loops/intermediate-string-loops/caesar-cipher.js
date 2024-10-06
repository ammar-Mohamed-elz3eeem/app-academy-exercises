/**
 * This function takes in a string and a number. The
 * function should return a new string where every
 * character of the original is shifted num characters
 * in the alphabet.
 *
 * @param {string} string
 *     This is the string to cipher.
 *
 * @param {number} num
 *     This is number of characters to shift in the
 *     alphabet.
 *
 * @returns
 *     a new string where every character of the original
 *     is shifted num characters in the alphabet.
 */
function caesarCipher(string, num) {
	// your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let oldAlphabetPos = alphabet.indexOf(letter);
    let newAlphabetPos = (oldAlphabetPos + num) % 26;
    newStr += alphabet[newAlphabetPos];
  }

  return newStr;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
