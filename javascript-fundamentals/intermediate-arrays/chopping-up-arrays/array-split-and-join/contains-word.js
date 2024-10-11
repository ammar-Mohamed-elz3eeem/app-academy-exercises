// your code here

/**
 * This function accepts two strings as args. The
 * function should return a boolean indicating whether
 * the targetWord is found inside of the sentence.
 *
 * @param {string} sentence
 *     This is sentence to check if it contains the
 *     given word or not.
 *
 * @param {string} word
 *     This is sentence to check if it contains the
 *     given word or not.
 *
 * @returns
 *     a boolean indicating whether the targetWord is
 *     found inside of the sentence.
 */
function containsWord (sentence, word) {
  const sentenceAsWords = sentence.split(" ");

  for (let i = 0; i < sentenceAsWords.length; i++) {
    const currentWord = sentenceAsWords[i];
    if (currentWord.toLowerCase() === word.toLowerCase()) {
			return true;
		}
  }

  return false;
}

console.log(containsWord("sounds like a plan", "like")); // true
console.log(containsWord("They are great", "they")); // true
console.log(containsWord("caterpillars are great animals", "cat")); // false
console.log(containsWord("Cast the net", "internet")); // false
