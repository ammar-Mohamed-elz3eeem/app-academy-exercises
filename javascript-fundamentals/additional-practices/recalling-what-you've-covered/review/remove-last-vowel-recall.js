// your code here

/**
 * This function takes in a string and returns
 * the string with its last vowel removed.
 *
 * @param {string} word
 *     This is the word to remove its last vowel.
 *
 * @returns
 *     the string with its last vowel removed.
 */
function removeLastVowel (word) {
  const vowels = "aeiou";
  let lastVowelsPos = -1;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter)) {
      lastVowelsPos = i;
    }
  }

  if (lastVowelsPos >= 0) {
    return word.slice(0, lastVowelsPos) + word.slice(lastVowelsPos + 1);
  }
  return word;
}

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
