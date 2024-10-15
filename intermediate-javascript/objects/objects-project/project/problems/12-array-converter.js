/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

/**
 * This function take an array as an argument and returns
 * an object representing the count of each value in the
 * array.
 *
 * @param {Array} array
 *     This is the array to convert to object.
 *
 * @returns
 *     an object representing the count of each value in the
 *     array.
 */
function arrayConverter(array) {
  // Your code here
  return array.reduce(function (acc, curr) {
    if (acc[curr] !== undefined) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;