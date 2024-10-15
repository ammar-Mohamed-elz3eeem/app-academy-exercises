/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

/**
 * This function accepts a value and two callbacks 
 * as arguments. The function should pass the value
 * to both callbacks and return the result of the
 * callback that is greater.
 *
 * @param {number} number
 *     This is the number to pass to callbacks
 *
 * @param {CallableFunction} cb1
 *     This is the first callback.
 *
 * @param {CallableFunction} cb2
 *     This is the second callback
 *
 * @returns
 *     the result of the callback that is greater.
 */
let greaterCallbackValue = function(number, cb1, cb2) {
    const firstCallbackResult = cb1(number);
    const secondCallbackResult = cb2(number);
    if (firstCallbackResult > secondCallbackResult) {
        return firstCallbackResult;
    }
    return secondCallbackResult;
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
