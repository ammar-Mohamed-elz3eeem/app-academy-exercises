// your code here

/**
 * This function takes in a string and returns the first
 * vowel that appears sequentially in the string. If the
 * string does not contain a vowel, return null.
 *
 * @param {string} word
 *     This is the string to check.
 *
 * @returns
 *     the first vowel that appears sequentially in the
 *     string. If the string does not contain a vowel,
 *     return null.
 */
function firstVowel (word) {
  const vowels = "aeiou";

	if (typeof word !== "string") return null;

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
    if (vowels.includes(letter)) {
      return letter;
    }
	}

	return null;
}

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
