/**
 * This function takes in both a word and an array of
 * words as arguments and returns a boolean that returns
 * true if that string is located inside of the array,
 * or false if it does not.
 *
 * @param {Array} array
 *     This is the array to search in.
 *
 * @param {string} word
 *     This is the word to search for.
 *
 * @returns
 *     returns true if that string is located inside of
 *     the array, or false if it does not.
 */
function wordWithinArray (array, word) {
  return array.indexOf(word) !== -1;
}

console.log(
	wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); //=> true

console.log(
	wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); //=> false
