/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

/**
 * This function take a string as an argument and returns
 * an object representing the count of each char in the
 * string.
 *
 * @param {string} string
 *     This is the string to convert to object.
 *
 * @returns
 *     an object representing the count of each char in the
 *     string.
 */
function stringConverter(string) {
  // Your code here
  const stringAsChars = string.split("");

  const stringAsObject = stringAsChars.reduce(function (acc, curr) {
    if (acc[curr] !== undefined) {
			acc[curr]++;
		} else {
			acc[curr] = 1;
		}
		return acc;
  }, {});

  return stringAsObject;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;