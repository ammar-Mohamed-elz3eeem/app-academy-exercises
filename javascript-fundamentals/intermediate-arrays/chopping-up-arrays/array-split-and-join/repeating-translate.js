/**
 * This function takes a string and returns the position
 * of the last vowel in the string.
 *
 * @param {string} word
 *     This is the word to get last vowel from.
 *
 * @returns
 *     The position of the last vowel in the given word.
 */
function getPosOfLastVowel(word) {
  const vowels = "aeiou";
  let last = -1;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter)) {
      last = i;
    }
  }

  return last;
}

/**
 * This function accepts a word as an argument. The
 * function should return a new word where all letters
 * that come after the last vowel (including the vowel
 * itself) are repeated at the end of the word. If the
 * value passed in is not a string, say someone passes
 * in a number as an argument, then return null.
 *
 * @param {string} word
 *     This is the word to reverb.
 *
 * @returns
 *     a new word where all letters that come after the
 *     last vowel (including the vowel itself) are repeated
 *     at the end of the word. If the value passed in is not
 *     a string, say someone passes in a number as an
 *     argument, then return null.
 */
function reverb (word) {
  if (typeof word !== "string")
    return null;
  
  const posOfLastVowel = getPosOfLastVowel(word.toLowerCase());
  if (posOfLastVowel === -1)
    return null;

  if (posOfLastVowel === word.length - 1) {
    return word + word;
  }

  const fromLastVowelToEndOfWord = word.slice(posOfLastVowel);
  return word + fromLastVowelToEndOfWord;
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
  const sentenceAsArr = sentence.split(" ");
  const newSentenceAsArr = [];

  for (let i = 0; i < sentenceAsArr.length; i++) {
    const word = sentenceAsArr[i];
    if (word.length >= 3) {
      newSentenceAsArr.push(reverb(word));
    } else {
      newSentenceAsArr.push(word);
    }
  }

  return newSentenceAsArr.join(" ");
}

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"
