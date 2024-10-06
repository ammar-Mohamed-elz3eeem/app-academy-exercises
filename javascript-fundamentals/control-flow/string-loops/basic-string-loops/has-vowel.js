// your code here

/**
 * This function takes in a string. The function should
 * return a boolean, true if the string contains at least
 * one vowel, false otherwise.
 *
 * @param {string} word
 *     This is the word to check if has vowels or not.
 * 
 * @returns
 *     true if the string contains at least one vowel,
 *     false otherwise.
 */
function hasVowel (word) {
  const vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i]))
      return true;
  }
  return false;
}

console.log(hasVowel("dog")); // true
console.log(hasVowel("conventional")); // true
console.log(hasVowel("rhythm")); // false
