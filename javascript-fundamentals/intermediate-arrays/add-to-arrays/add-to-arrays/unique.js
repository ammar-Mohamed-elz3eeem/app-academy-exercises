// Your code here

/**
 * This function accepts an array as an argument. The
 * function should return a new array containing elements
 * of the input array, without duplicates.
 *
 * @param {Array<number>} arr
 *     This is the array to remove duplicates from.
 */
function unique (arr) {
  let arrayWithoutDups = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arrayWithoutDups.indexOf(element) === -1) {
      arrayWithoutDups.push(element);
    }
  }

  return arrayWithoutDups;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']
