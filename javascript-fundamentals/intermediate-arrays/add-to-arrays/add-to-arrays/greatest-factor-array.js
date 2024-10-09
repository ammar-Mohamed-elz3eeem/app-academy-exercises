/**
 * This function takes in an array of numbers and returns
 * a new array where every even number is replaced with
 * it's greatest factor. A greatest factor is the largest
 * number that divides another with no remainder. For
 * example, the greatest factor of 16 is 8. (For the
 * purpose of this problem we won't say the greatest
 * factor of 16 is 16, because that would be too easy).
 *
 * @param {Array<number>} array
 *     This is the array of numbers to get biggest factor
 *     for every number.
 *
 * @returns
 *     a new array where every even number is replaced with
 *     it's greatest factor.
 */
function greatestFactorArray(array) {
  // your code here
  const biggestFactors = [];

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const biggestFactor = currentNumber % 2 === 0
      ? currentNumber / 2
      : currentNumber;
    biggestFactors.push(biggestFactor);
  }

  return biggestFactors;
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
