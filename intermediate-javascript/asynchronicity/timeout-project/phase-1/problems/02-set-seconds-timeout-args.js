/***********************************************************************
The `setSecondsTimeout` you wrote was cool, but it's missing some functionality.
The built-in `setTimeout` can also accept any additional number of arguments that
will be passed to the callback.

Write a function, `setSecondsTimeoutArgs`, that accepts a callback, a delay
in seconds, and any number of additional arguments. The function should call the
callback with the additional arguments after the specified delay.

In addition to Mocha, we recommend that you test your code manually using node
with the examples below.

Examples:

function printSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
setSecondsTimeoutArgs(printSum, 0.25, 5, 1, 4); // should print '10' after 250ms

setSecondsTimeoutArgs(function(arg1, arg2) {
    console.log(arg1 + '-' + arg2);
}, 0.7, 'hello', 'world'); // should print 'hello-world' after 700ms
***********************************************************************/

/**
 * This function accepts a callback, a delay in seconds, and any
 * number of additional arguments. The function should call the
 * callback with the additional arguments after the specified delay.
 *
 * @param {CallableFunction} cb
 *     This is the callback to use in setTimeout.
 *
 * @param {CallableFunction} delayInSeconds
 *     This is the amount to wait for before running the cb.
 *
 * @param {...Array} args
 *     This is the args that can be passed to the callback.
 *
 * @returns
 *     The id of the timeout to be used to clearTimeout.
 */
function setSecondsTimeoutArgs(cb, delayInSeconds, ...args) {
  // Your code here
  return setTimeout(cb, delayInSeconds * 1000, ...args);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = setSecondsTimeoutArgs;
} catch {
  module.exports = null;
}