/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

/**
 * This function accepts an array, a max number, and
 * a callback as arguments. The function should
 * return a boolean indicating whether or not there
 * are at most (fewer than or equal to) `max`
 * elements of the array that result in true when
 * passed into the callback.
 *
 * @param {Array} array
 *     This is the array to check its elements.
 *
 * @param {number} max
 *     This is the ,ax number of elements on the
 *     array that must match.
 *
 * @param {CallableFunction} callback
 *     This is the callback to run on array elements.
 *
 * @returns
 *     a boolean indicating whether or not there are at
 *     most (fewer than or equal to) `max` elements of
 *     the array that result in true when passed into
 *     the callback.
 */
let atMost = function(array, max, callback) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element, i)) {
            count++;
        }
    }

    return count <= max;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
