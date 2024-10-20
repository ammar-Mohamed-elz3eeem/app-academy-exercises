/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here

/**
 * This function returns all subsets of an array.
 *
 * @param {Array} array
 *     This is the array to get all subsets.
 *
 * @returns
 *     all subsets of the given array
 */
function subsets (array, subset = [], index = 0, res = []) {
  res.push([...subset]);

  for (let i = index; i < array.length; i++) {
    subset.push(array[i]);
    subsets(array, subset, i + 1, res);
    subset.pop();
  }

  return res;
}

console.log(subsets([1, 2, 3]));

// function recursionSubsets (array, index = 0, res = [], subset = []) {
//   if (array.length === index) return [res];

//   subset.push(array[index]);
// 	subsets(array.slice(index), index + 1, subset, res);
//   subset.pop();
  
//   res.push([...subset]);
// }

/*
[1,2,3]
result = [
  [],
  [3],
  [3, 2]
  [3, 2, 1]
]
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
