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

/**
 * takes in a sentence string and returns the word of the
 * sentence that contains the most vowels.
 *
 * @param {string} sentence
 *     This is the string which to extract the word with most
 *     vowels from.
 *
 * @returns
 *     returns the word of the sentence that contains the most
 *     vowels.
 */
function mostVowels (sentence) {
	// your code here

	// 1. store word with most vowels.
  let wordWithMostVowels = "";

	// 2. store biggest number of vowels for word with most vowels.
  let biggestNumberOfVowels = 0;

  // 3. convert the string to array of words.
  const strArray = sentence.split(" ");

  // 4. iterate over the array of words and compare the current
  //    word vowels with the recorded value.
  for (let i = 0; i < strArray.length; i++) {
		const element = strArray[i];
		const currentBiggestNumberOfVowels = countVowels(element);

		if (currentBiggestNumberOfVowels > biggestNumberOfVowels) {
			biggestNumberOfVowels = currentBiggestNumberOfVowels;
			wordWithMostVowels = element;
		}
	}

	return wordWithMostVowels;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("what a life")); // "you"
console.log(mostVowels("what the hell are you doing here")); // "are"
