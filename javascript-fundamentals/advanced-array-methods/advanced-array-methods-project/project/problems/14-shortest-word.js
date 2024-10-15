/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

/**
 * This function takes in a sentence string as an argument.
 * The function should return the shortest word in the sentence.
 *
 * @param {string} sentence
 *     This is the sentence to get shortest word from.
 *
 * @returns
 *     the shortest word in the sentence.
 */
let shortestWord = function(sentence) {
  // Your code here
  const sentenceAsArray = sentence.split(" ");

  return sentenceAsArray.reduce(function (shortest, word) {
    if (word.length <= shortest.length) {
      return word;
    }
    return shortest;
  });
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
