/**
 * This function takes in a "compressed" string as an arg.
 * A compressed string consists of a character immediately
 * followed by the number of times it appears in the
 * "uncompressed" form. The function should return the
 * uncompressed version of the string. See the examples.
 *
 * @param {string} str
 *     This is the string to uncompress.
 *
 * @returns
 *     the uncompressed version of the string.
 */
function uncompress (str) {
  const strAsArray = str.split("");
  let newStr = "";

  for (let i = 1; i < strAsArray.length; i += 2) {
    const numberAsString = strAsArray[i];
    const number = parseInt(numberAsString);
    newStr += strAsArray[i - 1].repeat(number);
  }

  return newStr;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
