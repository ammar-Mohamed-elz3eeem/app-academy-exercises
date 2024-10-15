/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three 
parameters. The first parameter is an object, the second parameter will be a 
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}
***********************************************************************/

/**
 * This function takes in three parameters. The first
 * parameter is an object, the second parameter will
 * be a string and the third parameter will be a value.
 * the function will return the object adding the second
 * parameter as a key using the third parameter as its
 * value.
 *
 * @param {Object} obj
 *     This is the object to set its key.
 *
 * @param {Object} string
 *     This is the key to set.
 *
 * @param {Object} value
 *     This is the value to assign to the given key.
 *
 * @returns
 *     the object adding the second parameter as a key
 *     using the third parameter as its value.
 */
function setKeyInObject(obj, string, value) {
  // Your code here
  obj[string] = value;
  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;