// Your code here

/**
 * This function takes a string and returns the position
 * of the last vowel in the string.
 *
 * @param {string} word
 *     This is the word to get last vowel from.
 *
 * @returns
 *     The position of the last vowel in the given word.
 */
function getPosOfLastVowel(word) {
  const vowels = "aeiou";
  let last = -1;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter)) {
      last = i;
    }
  }

  return last;
}

/**
 * This function accepts a word as an argument. The
 * function should return a new word where all letters
 * that come after the last vowel (including the vowel
 * itself) are repeated at the end of the word. If the
 * value passed in is not a string, say someone passes
 * in a number as an argument, then return null.
 *
 * @param {string} word
 *     This is the word to reverb.
 *
 * @returns
 *     a new word where all letters that come after the
 *     last vowel (including the vowel itself) are repeated
 *     at the end of the word. If the value passed in is not
 *     a string, say someone passes in a number as an
 *     argument, then return null.
 */
function reverb (word) {
  if (typeof word !== "string")
    return null;
  
  const posOfLastVowel = getPosOfLastVowel(word.toLowerCase());
  if (posOfLastVowel === -1)
    return null;

  const fromLastVowelToEndOfWord = word.slice(posOfLastVowel);
  return word + fromLastVowelToEndOfWord;
}

console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb(197393)); // null
