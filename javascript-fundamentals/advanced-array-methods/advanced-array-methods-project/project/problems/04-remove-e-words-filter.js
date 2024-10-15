/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

/**
 * This function accepts a sentence string as an arg. The
 * function should return a new string, containing only
 * the words that don't have the letter "e" in them.
 *
 * @param {string} sentence
 *     This is the sentence to remove e words from.
 *
 * @returns
 *     a new string, containing only the words that don't
 *     have the letter "e" in them.
 */
let removeEWords = function(sentence) {
  // Your code here
  const sentenceAsArray = sentence.split(" ");

  const wordsWithoutEAsArray = sentenceAsArray.filter(function (word) {
    return !word.toLowerCase().includes('e');
  });

  return wordsWithoutEAsArray.join(" ");
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
