// your code here

/**
 * This function accepts a number as an argument. The 
 * method should return a boolean indicating whether or
 * not the argument is a perfect square. A perfect square
 * is a number that is the product of some number
 * multiplied by itself. For example, since 64 = 8 * 8
 * and 144 = 12 * 12, 64 and 144 are perfect squares; 35
 * is not a perfect square.
 *
 * @param {number} num
 *     This is the number to check.
 *
 * @returns
 *     a boolean flag indicating whether or not the argument
 *     is a perfect square.
 */
function isPerfectSquare (num) {
  if (num === 1 || num === 0)
    return true;

  // Use binary search approach to get the sqrt then
  // check if the sqrt is perfect or not.
  let low = 1;
  let high = num / 2;
  let ans, mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if ((mid * mid) > num) {
      high = mid - 1;
    } else if ((mid * mid) <= num) {
      low = mid + 1;
      ans = mid;
    }
  }
  return (ans * ans) === num;
}

console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(64)); // true
console.log(isPerfectSquare(100)); // true
console.log(isPerfectSquare(169)); // true
console.log(isPerfectSquare(2)); // false
console.log(isPerfectSquare(40)); // false
console.log(isPerfectSquare(32)); // false
console.log(isPerfectSquare(50)); // false
