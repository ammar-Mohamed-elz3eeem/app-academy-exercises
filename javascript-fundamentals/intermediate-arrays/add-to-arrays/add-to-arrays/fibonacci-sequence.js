// Your code here

/**
 * This function accepts a number as an argument. The function
 * should return an array representing the fibonacci sequence
 * up to the given length. The first and second numbers of the
 * sequence are 1 and 1. To generate subsequent numbers of the
 * sequence, we take the sum of the previous two numbers of the
 * sequence.
 *
 * @param {number} num
 *     This is the number of elements we need in fibonacci
 *     sequence.
 *
 * @returns
 *     an array representing the fibonacci sequence up to the
 *     given length.
 */
function fibonacciSequence (num) {
  let fiboArr = [];

  for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) {
      fiboArr.push(1);
      continue;
    }
    fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
  }

  return fiboArr;
}

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
