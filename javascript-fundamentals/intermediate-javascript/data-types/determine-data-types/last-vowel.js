// your code here

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
			return word[i];
		}
	}

	return null;
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
