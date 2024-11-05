class Word {
	/**
	 * This is the default constructor of the class Word.
	 *
	 * @param {string} word
	 *     This is the word string to assign to the word property
	 *     of the class instance.
	 */
	constructor(word) {
		this.word = word;
	}

	/**
	 * This method returns a new version of the word property of
	 * the instance with all vowels in the original word being
	 * removed.
	 *
	 * @returns
	 *     a new version of the word with all vowels in the original
	 *     word being removed.
	 */
	removeVowels() {
		let vowels = "aeiouAEIOU";
		let newWord = "";
		for (let i = 0; i < this.word.length; i++) {
			let char = this.word[i];
			if (!vowels.includes(char)) {
				newWord += char;
			}
		}
		return newWord;
	}

	/**
	 * This method returns a new version of the word property of
	 * the instance with all consonants in the original word being
	 * removed.
	 *
	 * @returns
	 *     a new version of the word with all consonants in the
	 *     original word being removed.
	 */
	removeConsonants() {
		let vowels = "aeiouAEIOU";
		let newWord = "";
		for (let i = 0; i < this.word.length; i++) {
			let char = this.word[i];
			if (vowels.includes(char)) {
				newWord += char;
			}
		}
		return newWord;
	}

	/**
	 * This method returns a new word which is a copy of the
   * instance word but translated to pig Latin.
	 *
   * @returns
	 *     a new word which is a copy of the instance word but
	 *     translated to pig Latin.
	 */
	pigLatin() {
		let vowels = "aeiouAEIOU";

		if (vowels.includes(this.word[0])) {
			return this.word + "yay";
		}

		for (let i = 0; i < this.word.length; i++) {
			let char = this.word[i];
			if (vowels.includes(char)) {
				let first_half = this.word.slice(0, i);
				let second_half = this.word.slice(i);
				return second_half + first_half + "ay";
			}
		}
	}
}

module.exports = { Word };
