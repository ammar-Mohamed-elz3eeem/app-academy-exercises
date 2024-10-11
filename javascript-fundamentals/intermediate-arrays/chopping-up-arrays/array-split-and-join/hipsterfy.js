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
function lastVowel(word) {
	const vowels = "aeiou";
  const wordLowerCased = word.toLowerCase();

	if (typeof word !== "string") return null;

	for (let i = wordLowerCased.length - 1; i >= 0; i--) {
		const letter = wordLowerCased[i];
		if (vowels.includes(letter)) {
      return i;
		}
	}

	return -1;
}

/**
 * This function takes in a sentence string and returns
 * the sentence where every word is missing its last vowel.
 *
 * @param {string} sentence
 *     This is the sentence to hipsterfy
 *
 * @returns
 *     the sentence where every word is missing its last
 *     vowel.
 */
function hipsterfy (sentence) {
  const sentenceAsArr = sentence.split(" ");
  const hipsterfiedStrAsArr = [];

  for (let i = 0; i < sentenceAsArr.length; i++) {
    const word = sentenceAsArr[i];
    const lastVowelPos = lastVowel(word);
    if (lastVowelPos > 0) {
			hipsterfiedStrAsArr.push(
				word.slice(0, lastVowelPos) + word.slice(lastVowelPos + 1)
			);
		} else if (lastVowelPos === 0) {
			hipsterfiedStrAsArr.push(word.slice(1));
		} else {
			hipsterfiedStrAsArr.push(word);
		}
  }

  return hipsterfiedStrAsArr.join(" ");
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
