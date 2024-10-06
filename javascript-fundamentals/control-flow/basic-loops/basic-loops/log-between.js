/**
 * will print every number from lowNum to highNum,
 * inclusive. Inclusive means that the range includes
 * lowNum and highNum.
 *
 * @param {number} lowNum
 *     This is the number to start from.
 *
 * @param {number} highNum
 *     This is the number to reach to.
 */
function logBetween (lowNum, highNum) {
  let index = lowNum;
  while (index <= highNum) {
    console.log(index);
    index++;
  }
}

logBetween(-1, 2); // prints out:
// -1;
// 0;
// 1;
// 2;

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
// 4;
// 5;
// 6;
