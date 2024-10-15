/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

/**
 * This function returns true if number is prime. Otherwise,
 * false. A number is prime if it is only divisible by 1 and
 * itself.
 *
 * @param {number} num
 *     This is the number to check.
 *
 * @returns
 *     true if the given number is prime number, false
 *     otherwise.
 */
let isPrime = function(num) {
    // Your code here
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;

    if (num % 3 === 0 || num % 2 === 0)
        return false;

    for (let i = 5; i * i < num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

/**
 * This function takes in an array of numbers as args.
 * The function should return a new array containing
 * the primes from the original array.
 *
 * @param {Array} nums
 *     This is the numbers to pick primes from.
 *
 * @returns
 *     a new array containing the primes from the original
 *     array.
 */
let choosePrimes = function(nums) {
    // Your code here
    return nums.filter(isPrime);
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
