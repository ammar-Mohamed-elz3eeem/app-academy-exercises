// your code here

/**
 * This function takes in an array and a number as args.
 * The function should remove the last num elements from
 * the array, mutating the original array. The function
 * should return a new array containing the elements that
 * were removed.
 *
 * @param {Array<number>} array
 *     This is the array to remove elements from.
 *
 * @param {number} deleteCount
 *     This is number of elements to delete from the end
 *     of the array.
 *
 * @returns
 *     a new array containing the elements that were removed.
 */
const popper = function (array, deleteCount) {
  const deletedElements = [];

  for (let i = 0; i < deleteCount; i++) {
    const deletedElement = array.pop();
    deletedElements.push(deletedElement);
  }

  return deletedElements;
}

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
