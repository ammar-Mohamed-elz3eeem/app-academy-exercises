// Your code here

/**
 * This function accepts a string as an argument. The
 * function should return a boolean indicating whether
 * or not the string contains at least three different
 * vowels.
 *
 * @param {string} word
 *     This is the word to make the check on.
 *
 * @returns
 *     a boolean indicating whether or not the string
 *     contains at least three different vowels.
 */
function hasThreeVowels (word) {
  const vowels = "aeiou";
  let vowelsFound = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter)) {
      if (!vowelsFound.includes(letter)) {
        vowelsFound += letter;
      }
    }
    if (vowelsFound.length === 3) return true;
  }

  return false;
}

console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
