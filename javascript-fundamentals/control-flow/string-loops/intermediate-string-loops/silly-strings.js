// Your code here

/**
 * This function accepts a word as an argument. The
 * function should return a new word where every vowel
 * of the original word is followed by 'b' and that
 * same vowel. For example, 'siren' would turn into
 * 'sibireben'.
 *
 * @param {string} word
 *     This is the word to operate on.
 *
 * @returns
 *     a new word where every vowel of the original word
 *     is followed by 'b' and that same vowel.
 */
function sillyString (word) {
  const vowels = "aeiou";
  let newStr = "";

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    if (vowels.includes(currentLetter)) {
      newStr += currentLetter + "b" + currentLetter;
    } else {
      newStr += currentLetter;
    }
  }

  return newStr;
}

console.log(sillyString("stop")); // stobop
console.log(sillyString("that")); // thabat
console.log(sillyString("can")); // caban
console.log(sillyString("cats")); // cabats
console.log(sillyString("italy")); // ibitabaly
console.log(sillyString("scooter")); // scobooboteber
