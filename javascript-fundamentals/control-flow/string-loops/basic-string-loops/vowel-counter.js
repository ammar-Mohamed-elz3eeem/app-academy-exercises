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

// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple")); // => 2
// console.log(countVowels("pizza")); // => 2

const numbers = [5, 1, 4, 3, 2];
for (var i = 0; i < numbers.length; i++) {
	console.log(`This is message ${numbers[i]}`);
  setTimeout(() => {
    console.log(numbers, i);
      console.log(`This is message ${numbers[i]}`);
    },
		numbers[i] * 100
	);
} 
