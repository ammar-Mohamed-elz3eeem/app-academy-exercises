/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

/**
 * This function takes in an object and a key and returns
 * true if the key is inside the object and false if the
 * key is not inside the object.
 *
 * @param {Object} obj
 *     This is the object to check if contains key or not.
 *
 * @returns
 *     true if the key is inside the object and false if the
 *     key is not inside the object.
 */
function doesKeyExist(obj, key) {
  // Your code here
  return obj[key] !== undefined;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;