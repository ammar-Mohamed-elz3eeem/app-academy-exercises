/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

/**
 * This function accepts a string as an argument.
 * The function should return a boolean indicating
 * whether or not the string contains at least three
 * different vowels.
 *
 * @param {string} string
 *     This is the string to check if it has three
 *     vowels or not.
 *
 * @returns
 *     a boolean indicating whether or not the string
 *     contains at least three different vowels.
 */
let hasThreeVowels = function(string) {
    const vowels = "aeiou";
    const stringAsArray = string.split("");
    let vowelsFound = "";

    const vowelCounter = stringAsArray.reduce(function (vowelCounter, char) {
        if (vowels.includes(char)) {
            if (!vowelsFound.includes(char)) {
                vowelsFound += char;
                return vowelCounter + 1;
            }
        }
        return vowelCounter;
    }, 0);

    return vowelCounter >= 3;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
