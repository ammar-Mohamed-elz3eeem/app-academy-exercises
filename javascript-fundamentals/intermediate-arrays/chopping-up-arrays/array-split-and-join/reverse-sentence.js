// your code here

/**
 * This function takes in a sentence as an arg. The
 * function should return a new sentence where the
 * order of the words is reversed.
 * 
 * Note that you should reverse the order among words,
 * not the order among characters.
 *
 * @param {string} sentence
 *     This is the sentence to reverse.
 *
 * @returns
 *     new sentence where the order of the words is
 *     reversed.
 */
function reverseSentence (sentence) {
  const sentenceAsWords = sentence.split(" ");
  let j = sentenceAsWords.length - 1;

  for (let i = 0; i < j; i++, j--) {
    [sentenceAsWords[i], sentenceAsWords[j]] = [sentenceAsWords[j], sentenceAsWords[i]]
  }

  return sentenceAsWords.join(" ");
}

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
