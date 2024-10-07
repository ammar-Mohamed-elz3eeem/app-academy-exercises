/**
 * that takes in a string word and returns the number
 * of vowels in the word.
 *
 * @param {string} word
 *     This is the word to count its vowels.
 *
 * @returns
 *     the number of vowels in the word.
 */
function countVowels (word) {
  // your code here...
  const vowels = "aeiou";
  let counter = 0;
	for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i]))
      counter++;
	}
  return counter;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
