// your code here

/**
 * This function takes in an array and target value as args.
 * The function should return the first index where the target
 * is found in the array. If the target is not found, it
 * should return -1.
 *
 * @param {Array<string>} arr
 *     This is the array to search in.
 * 
 * @param {Array<string>} target
 *     This is the value to search for.
 *
 * @returns
 *     the first index where the target is found in the array. If
 *     the target is not found, it should return -1.
 */
function myIndexOf (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === target)
      return i;
  }

  return -1;
}

console.log(myIndexOf(["a", "b", "c", "e"], "c")); // 2
console.log(myIndexOf(["a", "b", "c", "e"], "e")); // 3
console.log(myIndexOf(["a", "b", "c", "e"], "z")); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
