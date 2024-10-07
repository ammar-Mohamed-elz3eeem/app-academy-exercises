// your code here

/**
 * This function accepts an array and a target value as
 * args. The function should return a boolean indicating
 * whether the target is found in the array.
 *
 * @param {Array} array
 *     This is the array to search in.
 *
 * @param {*} value
 *     This is the value to search for.
 *
 * @returns
 *     boolean indicating whether the target is found in
 *     the array.
 */
function myIncludes (array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value)
      return true;
  }
  return false;
}

console.log(myIncludes(["a", "b", "c", "e"], "c")); // true
console.log(myIncludes(["a", "b", "c", "e"], "a")); // true
console.log(myIncludes(["a", "b", "c", "e"], "z")); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
