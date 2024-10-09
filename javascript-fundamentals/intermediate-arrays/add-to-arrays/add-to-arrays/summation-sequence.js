/**
 * This function takes in a number and generate the summation.
 * summation is resulted by summing up from 1 to the given
 * number.
 *
 * @param {number} num
 *     This is the number to get summation until.
 *
 * @returns
 *     the summation till the given number.
 */
function summation (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

/**
 * This function takes in two numbers: start and length. The
 * function should return an array containing length total
 * elements. The first number of the sequence should be the
 * start number. At any point, to generate the next element of
 * the sequence we take the summation of the previous element.
 * You can assume that length is not zero.
 *
 * @param {number} start
 *     This is the base number.
 *
 * @param {number} length
 *     This is the length of the array needed.
 *
 * @returns
 *     an array containing length total elements. The first
 *     number of the sequence should be the start number. At
 *     any point, to generate the next element of the sequence
 *     we take the summation of the previous element.
 */
function summationSequence (start, length) {
  // your code here
  const summationArr = [start];

  for (let i = 1; i < length; i++) {
    summationArr.push(summation(summationArr[i - 1]));
  }

  return summationArr;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
