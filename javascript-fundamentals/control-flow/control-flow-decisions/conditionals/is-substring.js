/**
 * This function takes in two strings, searchString and 
 * subString. The function should return true if subString
 * is a part of the searchString, regardless of upper or
 * lower case, and false if otherwise.
 *
 * @param {string} searchString
 *     This is the search string to search in for the
 *     given subString
 *
 * @param {string} subString
 *     This is the subString to search for in the given
 *     searchString.
 *
 * @returns
 *     true if subString is a part of the searchString,
 *     regardless of upper or lower case, and false if
 *     otherwise.
 */
function isSubstring(searchString, subString) {
  return searchString.toLowerCase().indexOf(subString.toLowerCase()) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false