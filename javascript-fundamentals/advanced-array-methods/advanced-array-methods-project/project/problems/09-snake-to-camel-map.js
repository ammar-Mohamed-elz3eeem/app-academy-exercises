/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

/**
 * This function takes in a snake_cased string and returns a
 * PascalCased version of the string. snake_case is where each
 * word is separated with underscores(`_`). PascalCase is a
 * string where the first char of each word is capital, all
 * other chars lowercase.
 *
 * @param {string} str
 *     This is the string to convert to PascalCase.
 *
 * @returns
 *     a PascalCased version of the string. snake_case is where
 *     each word is separated with underscores(`_`). PascalCase
 *     is a string where the first char of each word is capital,
 *     all other chars lowercase.
 */
function snakeToCamel(str) {
    // Your code here
    const strAsArray = str.split("_");

    const newStrAsArray = strAsArray.map(function (word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    return newStrAsArray.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
