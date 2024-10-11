/**
 * This function takes a string and returns the position
 * of the first vowel in the string.
 *
 * @param {string} word
 *     This is the word to get first vowel from.
 *
 * @returns
 *     The position of the first vowel in the given word.
 */
function getPosOfFirstVowel(word) {
	const vowels = "aeiou";

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if (vowels.includes(letter)) {
      return i;
		}
	}

	return -1;
}

/**
 * This function takes in a sentence and returns a new
 * sentence where every word begins with it's first vowel.
 *
 * @param {string} sentence
 *     This is the sentence to rephrase.
 *
 * @returns
 *     a new sentence where every word begins with it's
 *     first vowel.
 */
function consonantCancel (sentence) {
  const sentenceAsArr = sentence.split(" ");
	const newSentenceAsArr = [];

	for (let i = 0; i < sentenceAsArr.length; i++) {
    const word = sentenceAsArr[i];
    const firstVowelPos = getPosOfFirstVowel(word.toLowerCase());
    newSentenceAsArr.push(word.slice(firstVowelPos));
	}

	return newSentenceAsArr.join(" ");
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
