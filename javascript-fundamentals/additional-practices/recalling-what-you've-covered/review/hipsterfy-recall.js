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
 * This function takes in a string and returns
 * the string with its last vowel removed.
 *
 * @param {string} word
 *     This is the word to remove its last vowel.
 *
 * @returns
 *     the string with its last vowel removed.
 */
function removeLastVowel (word) {
  const lastVowelPosition = lastVowel(word);
  if (lastVowelPosition > 0) {
    return word.slice(0, lastVowelPosition) + word.slice(lastVowelPosition + 1);
  } else if (lastVowelPosition === 0) {
    return word.slice(1);
  }
  return word;
}

/**
 * This function takes in a sentence string and returns
 * the sentence where every word is missing its last vowel.
 *
 * @param {string} sentence
 *     This is the sentence to hipsterfy
 *
 * @returns
 *     the sentence where every word is missing its last vowel.
 */
function hipsterfy(sentence) {
  const sentenceAsArray = sentence.split(" ");
  const newSentenceAsArray = [];

  for (let i = 0; i < sentenceAsArray.length; i++) {
    const word = sentenceAsArray[i];
    newSentenceAsArray.push(removeLastVowel(word));
  }

  return newSentenceAsArray.join(" ");
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
