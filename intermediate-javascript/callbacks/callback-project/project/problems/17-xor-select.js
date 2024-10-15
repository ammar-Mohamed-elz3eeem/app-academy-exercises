/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

/**
 * This function accepts an array and two callback
 * as arguments. The function should return a new
 * array containing elements of the original array
 * that result in true when passed in one of the
 * callbacks, but not both.
 *
 * @param {Array} array
 *     This is the array to select elements from.
 *
 * @param {CallableFunction} cb1
 *     This is the first callback.
 *
 * @param {CallableFunction} cb2
 *     This is the second callback.
 *
 * @returns
 *     a new array containing elements of the original
 *     array that result in true when passed in one of
 *     the callbacks, but not both.
 */
let xorSelect = function(array, cb1, cb2) {
  const filteredArray = [];

	for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const firstCallback = cb1(element);
    const secondCallback = cb2(element);
    if (
      (firstCallback || secondCallback) &&
      !(firstCallback && secondCallback)
    ) {
			filteredArray.push(element);
		}
	}

	return filteredArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
