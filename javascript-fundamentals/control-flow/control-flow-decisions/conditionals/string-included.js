/**
 * This function accepts a sentence and two words as
 * arguments. The function should return true if either
 * word1 or word2 is found in the sentence, and false
 * if neither is found.
 *
 * @param {string} sentence
 *     This is the sentence to search in.
 *
 * @param {string} word1
 *     This is the first word to check if exists on 
 *     sentence or not.
 *
 * @param {string} word2
 *     This is the second word to check if exists on
 *     sentence or not.
 *
 * @returns
 *     true if either word1 or word2 exists in the given
 *     sentence, or false otherwise.
 */
function eitherStringIncluded (sentence, word1, word2) {
  if (sentence.includes(word1) || sentence.includes(word2))
    return true;
  return false;
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
