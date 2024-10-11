// your code here

/**
 * This function remove the vowels fron the given word
 * and returns the same word but without any vowels in
 * it.
 *
 * @param {string} word
 *     This is the word to remove its vowels.
 *
 * @returns
 *     the same word but with its vowels removed.
 */
function removeVowels(word) {
  const vowels = "aeiou";
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!vowels.includes(char)) {
      newWord += char;
    }
  }

  return newWord;
}

/**
 * This function takes in a sentence string. The function
 * should return a new sentence where words that are longer
 * than 4 characters have their vowels removed.
 *
 * @param {sentence} sentence
 *     This is the sentence to abbreviate.
 *
 * @returns
 *     a new sentence where words that are longer than 4
 *     characters have their vowels removed.
 */
function abbreviateWords (sentence) {
  const sentenceAsWords = sentence.split(" ");
  const newSentence = [];

  for (let i = 0; i < sentenceAsWords.length; i++) {
    const word = sentenceAsWords[i];
    if (word.length > 4) {
      newSentence.push(removeVowels(word));
    } else {
      newSentence.push(word);
    }
  }

  return newSentence.join(" ");
}

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg
