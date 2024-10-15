/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

/**
 * This function accepts an array and a callback
 * as arguments. The function should call the
 * callback for each element of the array,
 * passing in the element. The function should
 * return true if all elements of the array result
 * to false when passed into the callback. Otherwise,
 * the method should return false.
 *
 * @param {Array<number} array
 *     This is the array to check its elements.
 *
 * @param {CallableFunction} callback
 *     This is the callback to run on array elements.
 *
 * @returns
 *     true if all elements of the array result to
 *     false when passed into the callback. Otherwise,
 *     the method should return false.
 */
let none = function(array, callback) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element, i)) {
            return false;
        }
    }

    return true;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
