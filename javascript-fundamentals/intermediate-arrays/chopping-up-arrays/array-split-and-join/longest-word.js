/**
 * This function takes in a sentence string as an argument.
 * The function should return the longest word in the
 * sentence. If there is more than one "longest word", return
 * the first of these instances.
 *
 * @param {string} sentence
 *     This is the sentence which from it we extract the
 *     longest word.
 *
 * @returns
 *     The longest word in the given sentence. If there is more
 *     than one "longest word", return the first of these
 *     instances.
 */
function longestWord(sentence) {
  let longestWord = "";
  let longestWordLen = 0;
  const sentenceAsWords = sentence.split(" ");

  for (let i = 0; i < sentenceAsWords.length; i++) {
    let currentWordLength = sentenceAsWords[i].length;
    if (currentWordLength > longestWordLen) {
      longestWordLen = currentWordLength;
      longestWord = sentenceAsWords[i];
		}
  }

  return longestWord;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
