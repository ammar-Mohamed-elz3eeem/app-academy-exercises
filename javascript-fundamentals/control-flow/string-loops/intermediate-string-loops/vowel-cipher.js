/**
 * This function takes in a string and returns a new string
 * where every vowel becomes the next vowel in the alphabet.
 *
 * @param {string} string
 *     This is the string to cipher its vowels.
 *
 * @returns
 *     returns a new string where every vowel becomes the
 *     next vowel in the alphabet
 */
function vowelCipher(string) {
	// your code here
	const vowels = "aeiou";
	let newStr = "";

	for (let i = 0; i < string.length; i++) {
		let letter = string[i];
    if (vowels.includes(letter)) {
      let oldVowelPos = vowels.indexOf(letter);
			let newVowelPos = (oldVowelPos + 1) % 5;
      newStr += vowels[newVowelPos];
      continue;
    }
    newStr += letter;
	}

	return newStr;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
