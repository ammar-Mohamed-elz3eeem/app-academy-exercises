/**
 * This function takes in a string and returns a
 * "whispered" version of that string. whispered
 * string are the same string with all letters
 * being converted to lowercase letters and 
 * appended and prepended with three dots "...".
 *
 * @param {string} str
 *     This is the string to convert to whispered
 *     string.
 *
 * @returns
 *     a "whispered" version of that string. whispered
 *     string are the same string with all letters
 *     being converted to lowercase letters and
 *     appended and prepended with three dots "...".
 */
function whisper (str) {
  return `...${str.toLowerCase()}...`;
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
