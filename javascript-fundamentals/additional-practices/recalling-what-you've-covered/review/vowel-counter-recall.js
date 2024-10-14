/**
 * This function takes in a string word and returns the number
 * of vowels in the word. Vowels are the letters "a", "e", "i",
 * "o", "u".
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
  let vowelsCount = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
