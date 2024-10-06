/**
 * This function takes in a number length and returns
 * the fibonacci sequence up to the given length. The
 * fibonacci sequence is a sequence of numbers whose
 * first and second elements are 1. To generate further
 * elements of the sequence we take the sum of the
 * previous two elements. For example the first 6
 * fibonacci numbers are 1, 1, 2, 3, 5, 8.
 *
 * @param {number} length
 *     This is the length of the array representing the
 *     fibonacci series.
 *
 * @returns
 *     an array of the given length containing the numbers
 *     in the fibonacci series.
 */
function fibonacci (length) {
	// your code here
  let arr = [];
  if (length === 0)
    return arr;
  
  for (let i = 0; i < length; i++) {
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
