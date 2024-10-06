// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

/**
 * This function takes in a word string and translates
 * the word into Pig Latin. Pig Latin is a fun take on
 * the English language where you move any consonant
 * cluster from the start of the word to the end of the
 * word; when words begin on a vowel, you simply add
 * "-yay". Vowels are "aeiou".
 *
 * @param {string} word
 *     This is the word to convert to Pig Latin.
 *
 * @returns
 *     the translated version of the string into Pig
 *     Latin.
 */
function pigLatinWord(word) {
  const vowels = "aeiou";

  if (vowels.includes(word[0])) {
    return word + "yay"
  }

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return word.slice(i) + word.slice(0, i) + "ay";
    }
  }

  return word;
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
