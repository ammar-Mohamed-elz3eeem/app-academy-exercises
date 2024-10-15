/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

/**
 * This function takes in an array of objects as the
 * first parameter and a string as the second. The
 * `keyInObjectArray`  will return `true` if any of
 * the objects contains the `keyString` as a key
 * within them, and `false` if not.
 *
 * @param {Array<Object>} objArray
 *     This is the array of object to search for key in.
 *
 * @returns
 *     true if any of the objects contains the  given
 *     keyString as a key within them, and false if not.
 */
function keyInObjectArray(objArray, keyString) {
  // Your code here
  return objArray.some(function (obj) {
    return obj[keyString] !== undefined;
  });
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;