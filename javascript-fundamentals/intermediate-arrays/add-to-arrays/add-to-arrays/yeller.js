// your code here

/**
 * This function takes in an array of words. The function
 * should return a new array where each element of the
 * original array is yelled.
 *
 * @param {Array<string>} array
 *     This is the array to yell its strings.
 *
 * @returns
 *     a new array where each element of the original array
 *     is yelled.
 */
function yeller (array) {
  let yelledArr = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const stringYelled = element.toUpperCase() + "!";
    yelledArr.push(stringYelled);
  }

  return yelledArr;
}

console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
