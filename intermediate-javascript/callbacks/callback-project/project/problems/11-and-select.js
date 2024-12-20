/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

/**
 * This function accepts an array and two callbacks.
 * The function should return a new array containing
 * elements of the original array that result in true
 * when passed into both callbacks.
 *
 * @param {Array} array
 *     This is the array to select from.
 *
 * @param {CallableFunction} cb1
 *     This is the first callback.
 *
 * @param {CallableFunction} cb2
 *     This is the second callback
 *
 * @returns
 *     a new array containing elements of the original
 *     array that result in true when passed into both
 *     callbacks.
 */
let andSelect = function(array, cb1, cb2) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (cb1(element) && cb2(element)) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
