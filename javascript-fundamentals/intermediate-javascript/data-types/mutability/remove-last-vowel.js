// Your code here

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
 * This function takes in a string and returns the string
 * with its last vowel removed.
 *
 * @param {string} word
 *     This is the word to remove the vowel from.
 *
 * @returns
 *     the string with its last vowel removed.
 */
function removeLastVowel(word) {
	if (typeof word !== "string") return null;

	const posOfLastVowel = getPosOfLastVowel(word.toLowerCase());
	if (posOfLastVowel === -1) return word;

  const wordAfterLastVowel = word.slice(posOfLastVowel + 1);
  const wordBeforeLastVowel = word.slice(0, posOfLastVowel);
	return wordBeforeLastVowel + wordAfterLastVowel;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
