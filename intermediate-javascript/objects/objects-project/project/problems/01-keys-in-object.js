/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

/**
 * This function takes in an object and returns 
 * an array of all the keys within that Object.
 *
 * @param {Object} obj
 *     This is the object to extract all its keys.
 *
 * @returns
 *     an array of all the keys within that Object.
 */
function keysInObject(obj) {
  // Your code here

  // Using for in loops
  const objectKeys = [];

  for (let key in obj) {
		objectKeys.push(key);
	}

  return objectKeys;

  // Using Object.keys()
  // return Object.keys(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;