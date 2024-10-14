/**
 * This function takes in an array of numbers and returns
 * the total sum of all the numbers.
 *
 * @param {Array<number} array
 *     This is the array to get its elements sum.
 *
 * @returns
 *     the total sum of all the numbers.
 */
function sumArray (array) {
  // your code here...
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    sum += currentNumber;
  }

  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
