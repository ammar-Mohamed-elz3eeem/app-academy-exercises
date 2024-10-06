// your code here

/**
 * This function takes in a "compressed" string as an
 * arg. A compressed string consists of a character
 * immediately followed by the number of times it
 * appears in the "uncompressed" form. The function
 * should return the uncompressed version of the
 * string.
 *
 * @param {string} compressedWord
 *     This is the word to uncompress.
 *
 * @returns
 *     the uncompressed version of the string.
 */
function uncompress (compressedWord) {
  let newStr = "";
  for (let i = 1; i < compressedWord.length; i += 2) {
    const currentNum = Number(compressedWord[i]);
    const currentLetter = compressedWord[i - 1];
    newStr += currentLetter.repeat(currentNum);
  }
  return newStr;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
