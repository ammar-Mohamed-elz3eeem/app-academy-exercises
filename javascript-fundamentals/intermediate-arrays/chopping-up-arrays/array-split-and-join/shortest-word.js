// Your code here

/**
 * This function accepts a sentence as an argument. The
 * function should return the shortest word in the sentence.
 *
 * If there is a tie, return the word that appears later in
 * the sentence.
 *
 * @param {string} sentence
 *     This is the sentence to determine its shortest word.
 *
 * @returns
 *     the shortest word in the sentence.
 */
function shortestWord (sentence) {
  const sentenceAsWords = sentence.split(" ");
  let shortestWord = sentenceAsWords[0];

  for (let i = 0; i < sentenceAsWords.length; i++) {
    const word = sentenceAsWords[i];
    if (word.length <= shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'
