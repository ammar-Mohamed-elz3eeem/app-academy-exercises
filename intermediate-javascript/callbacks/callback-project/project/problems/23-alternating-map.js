/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/

/**
 * This function accepts an array and two callbacks as
 * arguments. The function should return a new array
 * containing the results of passing the original
 * elements into the callbacks in an alternating fashion.
 * In other words, 
 *   - the first element should be passed to callback 1
 *   - the second element should be passed to callback 2
 *   - the third element should be passed to callback 1
 *   - the fourth element should be passed to callback 2
 *   - ... and so on
 *
 * @param {Array} array
 *     This is the array to run mappers on.
 *
 * @param {CallableFunction} callback1
 *     This is the first callback.
 *
 * @param {CallableFunction} callback2
 *     This is the second callback.
 *
 * @returns
 *     a new array containing the results of passing the original
 *     elements into the callbacks in an alternating fashion
 */
let alternatingMap = function(array, callback1, callback2) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 === 0) {
            newArray.push(callback1(element));
        } else {
            newArray.push(callback2(element));
        }
    }

    return newArray;
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
