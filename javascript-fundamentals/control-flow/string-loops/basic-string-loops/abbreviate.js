// your code here

/**
 * This function takes in a string arg. The function
 * should return a new string where all of its
 * vowels are removed.
 *
 * @param {string} word
 *     This is the word to abbreviate.
 *
 * @returns
 *     The abbreviated word of the given word.
 */
function abbreviate (word) {
  const vowels = "aeiou";
  let newStr = "";
  const wordLowered = word.toLowerCase();

	for (let i = 0; i < wordLowered.length; i++) {
		if (!vowels.includes(wordLowered[i])) {
      newStr += wordLowered[i];
    }
  }

  return newStr;
}

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
