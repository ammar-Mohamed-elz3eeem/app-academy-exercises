/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

/**
 * This function accepts a value and any number of
 * callbacks as arguments. The function should return
 * the final result of passing the value through all
 * of the given callbacks. In other words, if three
 * callbacks are given then:
 *   - the value is given to the first callback
 *   - the result of the first callback is given to the second callback
 *   - the result of the second callback is given to the third callback
 *   - the result of the third callback is the final result
 *
 * @param {number} value
 *     This is the value to run chain maps on it.
 *
 * @param {Array<CallableFunction>} callbacks
 *     This is the array of callbacks to run. 
 *
 * @returns
 *     the final result of passing the value through all
 *     of the given callbacks.
 */
let chainMap = function (value, ...callbacks) {
	let number = value;

    for (let j = 0; j < callbacks.length; j++) {
        const callback = callbacks[j];
        number = callback(number);
    }

	return number;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
