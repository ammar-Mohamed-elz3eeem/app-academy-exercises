/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

/**
 * This function takes in a sentence string as an argument.
 * The function should return the longest word in the sentence.
 *
 * @param {string} sentence
 *     This is the sentence to get longest word from.
 *
 * @returns
 *     the longest word in the sentence.
 */
let longestWord = function(sentence) {
    // Your code here
    const sentenceAsArray = sentence.split(" ");

    return sentenceAsArray.reduce(function (longest, word) {
        if (word.length > longest.length) {
            return word;
        }
        return longest;
    }, "");
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
