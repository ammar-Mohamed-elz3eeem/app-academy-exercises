/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

/**
 * This function accepts an array and a callback as arguments. 
 * The function return an array of new elements obtained by
 * calling the callback on each element of the array, passing
 * in the element.
 *
 * @param {Array} array
 *     This is the array to loop over.
 *
 * @param {CallableFunction} cb
 *     This is the callback to apply for every element in
 *     array.
 *
 * @returns
 *     an array of new elements obtained by calling the
 *     callback on each element of the array, passing in
 *     the element.
 */
let myMap = function(array, cb) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        newArray.push(cb(element, i, array));
    }

    return newArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
