/*
Write a function `yeller(words)` that takes in an array of words.
The function should return a new array where each element of the original array
is yelled.

Solve this using Array's `map()` method.

Examples:

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

*/

/**
 * This function takes in an array of words. The function
 * should return a new array where each element of the
 * original array is yelled.
 *
 * @param {Array<string>} words
 *     This is the array to yell its words.
 *
 * @returns
 *     new array where each element of the original array
 *     is yelled.
 */
let yeller = function(words) {
  // Your code here
  return words.map(function (word) {
    return word.toUpperCase() + "!";
  })
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = yeller;
} catch (e) {
  module.exports = null;
}
