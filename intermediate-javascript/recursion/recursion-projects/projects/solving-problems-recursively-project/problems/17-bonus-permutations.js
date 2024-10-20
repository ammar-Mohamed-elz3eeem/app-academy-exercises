/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here

/**
 * This function calculates all the permutations of the given
 * array. For an array of length n there are n! different
 * permutations. So for an array with three elements we will
 * have 3 * 2 * 1 = 6 different permutations.
 *
 * @param {Array<number>} array
 *     This is the array to get its permutations.
 *
 * @returns
 *     all the permutations of the given array. 
 */
function permutations (array, index = 0, permutationsArr = []) {
  if (index === array.length) {
    permutationsArr.push([...array]);
    return permutationsArr;
  }

  for (let i = index; i < array.length; i++) {
    [array[i], array[index]] = [array[index], array[i]];
    permutations(array, index + 1, permutationsArr);
    [array[i], array[index]] = [array[index], array[i]];
  }

  return permutationsArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
