/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

/**
 * This function takes in two objects and a key (string).
 * The function should return an array containing the
 * corresponding values of the objects for the given key.
 *
 * @param {object} obj1
 *     This is the first object.
 *
 * @param {object} obj2
 *     This is the second object.
 *
 * @param {string} key
 *     This is the key to extract from both given objects.
 *
 * @returns
 *     an array containing the corresponding values of the
 *     objects for the given key.
 */
function valuePair(obj1, obj2, key) {
  // Your code here
  return [obj1[key], obj2[key]];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;