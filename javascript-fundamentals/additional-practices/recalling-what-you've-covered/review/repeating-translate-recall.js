// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here

/**
 * This function takes in a string and returns the last
 * vowel that appears sequentially in the string. Note
 * that the string may contain capitalization.
 *
 * @param {string} word
 *     This is the string to check.
 *
 * @returns
 *     the last vowel that appears sequentially in the
 *     string. Note that the string may contain capitalization.
 */
function lastVowel (word) {
  const vowels = "aeiou";

  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    if (vowels.includes(char)) {
      return i;
    }
  }

  return -1;
}

/**
 * This function accepts a sentence as an argument. The function
 * should translate the sentence according to the following
 * rules:
 * - words that are shorter than 3 characters are unchanged
 * - words that are 3 characters or longer are translated
 *   according to the following rules:
 *   - if the word ends with a vowel, simply repeat the word
 *     twice (example: 'like' -> 'likelike').
 *   - if the word ends with a non-vowel, repeat all letters
 *     that come after the word's last vowel, including the
 *     last vowel itself (example: 'trash' -> 'trashash').
 *
 * @param {string} sentence
 *     This is the sentence to translate.
 *
 * @returns
 *     the translated version of the given sentence.
 */
function repeatingTranslate (sentence) {
  const vowels = "aeiou";
  const sentenceAsArray = sentence.split(" ");
  const newSentenceAsArray = [];

  for (let i = 0; i < sentenceAsArray.length; i++) {
    const word = sentenceAsArray[i];
    if (word.length < 3) {
      newSentenceAsArray.push(word);
      continue;
    }
    if (vowels.includes(word[word.length - 1])) {
      newSentenceAsArray.push(word + word);
      continue;
    }
    const lastVowelPosition = lastVowel(word);
    newSentenceAsArray.push(word + word.slice(lastVowelPosition))
  }

  return newSentenceAsArray.join(" ");
}

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"
