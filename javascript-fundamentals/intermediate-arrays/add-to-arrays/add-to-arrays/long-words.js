/**
 * This function takes in an array of words. The function
 * should return an array containing only the words that
 * are longer than 5 characters.
 *
 * @param {Array<string>} words
 *     This is the array or words to extract words that
 *     are longer than 5 characters.
 *
 * @returns
 *     an array containing only the words that are longer
 *     than 5 characters.
 */
function longWords (words) {
  const longestWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
