/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

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
let removeLastVowel = function(word) {
    // Your code here
    const vowels = "aeiou";
    let lastVowelPosition = -1;
    let newWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            lastVowelPosition = i;
            break;
        }
        newWord = word[i] + newWord;
    }

    if (lastVowelPosition > 0) {
        return word.slice(0, lastVowelPosition) + newWord;
    } else if (lastVowelPosition === 0) {
        return newWord;
    } else {
        return word;
    }
};

/**
 * This function takes in a sentence string and returns
 * the sentence where every word is missing its last vowel.
 *
 * @param {string} sentence
 *     This is the sentence to hipsterfy
 *
 * @returns
 *     the sentence where every word is missing its last vowel.
 */
let hipsterfy = function(sentence) {
    // Your code here
    const sentenceAsArray = sentence.split(" ");
    return sentenceAsArray.map(removeLastVowel).join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
