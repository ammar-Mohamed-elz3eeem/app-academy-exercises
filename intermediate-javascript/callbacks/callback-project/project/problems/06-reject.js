/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

/**
 * This function accepts an array and callback as arguments.
 * The function should call the callback for each element of
 * the array, passing in the element. The function should
 * return a new array containing elements of the original
 * array that result in false when given to the callback.
 *
 * @param {Array} array
 *     This is the array to reject elements from.
 *
 * @param {CallableFunction} cb
 *     This is the callback to reject according to its
 *     condition.
 *
 * @returns
 *     a new array containing elements of the original 
 *     array that result in false when given to the
 *     callback.
 */
let reject = function(array, cb) {
    const acceptedArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (cb(element, i, array) === false) {
            acceptedArray.push(element);
        }
    }

    return acceptedArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
