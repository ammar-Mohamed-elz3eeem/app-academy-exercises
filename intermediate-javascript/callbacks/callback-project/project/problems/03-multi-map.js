/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

/**
 * This function accepts a value, a number n, and a callback.
 * The function should return the new value that results from
 * running the original value through the callback n times.
 *
 * @param {number} num
 *     This is the number to map over.
 *
 * @param {number} mapRounds
 *     This is the number to of map rounds needed.
 *
 * @param {CallableFunction} cb
 *     This is the map function.
 *
 * @returns
 *     the new value that results from running the original
 *     value through the callback n times.
 */
let multiMap = function(num, mapRounds, cb) {
  let newNumber = num;

  for (let i = 0; i < mapRounds; i++) {
    newNumber = cb(newNumber);
  }

  return newNumber;
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
