/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/

/**
 * This function accepts a callback, a delay in milliseconds, and
 * an optional amount as arguments. The function should  set an
 * interval with the given callback and delay. If an amount
 * argument is passed, the interval should be cleared after the
 * callback has been  called 'amount' number of times. If an amount
 * argument is not passed, the interval should not be cleared and
 * the function should instead return the Timeout object for the
 * interval.
 *
 * @param {CallableFunction} cb
 *     This is the callback to be used in setInterval.
 *
 * @param {number} delay
 *     This is the delay to be used in setInterval.
 *
 * @param {number} amount
 *     This is the the number of times we need to run setInterval.
 *
 * @returns
 *     the Timeout object for the interval if only amount is
 *     undefined.
 */
function dynamicIntervalCount(cb, delay, amount) {
  // Your code here
  if (amount === undefined) {
    return setInterval(cb, delay);
  }
  const intervalObject = setInterval(function () {
    cb();

    amount--;
    if (amount === 0) {
      clearInterval(intervalObject);
    }
  }, delay)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}