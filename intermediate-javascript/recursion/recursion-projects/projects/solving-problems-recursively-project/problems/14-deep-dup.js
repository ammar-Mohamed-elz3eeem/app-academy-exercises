/***********************************************************************
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:
let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array, 
when compared to various indexes of the original array, should evaluate to false like below.


Examples:

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false

Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true


***********************************************************************/

// your code here

/**
 * This function deeply duplicates a given array. Your
 * duplicated array, when compared to various indexes
 * of the original array, should evaluate to false.
 *
 * @param {Array} array
 *     This is the array to duplicate.
 *
 * @returns
 *     The duplicated array.
 */
function deepDup(array) {
	// Method #1: Solve using recursion only.
	return recursionDeepDup(0, array, []);
	
	// Method #2: Solve using recursion + iteration.

	// for (let i = 0; i < array.length; i++) {
	//   if (Array.isArray(array[i])) {
	//     duplicatedArray.push(deepDup(array[i], []))
	//   } else {
	//     duplicatedArray.push(array[i]);
	//   }
	// }
	// return duplicatedArray;
}

/**
 * This function deeply duplicates a given array. Your
 * duplicated array, when compared to various indexes
 * of the original array, should evaluate to false.
 *
 * @param {number} index
 *     This is the current index of the array element
 *     to copy.
 *
 * @param {Array<any>} array
 *     This is the array to duplicate.
 *
 * @param {Array<any>} duplicatedArray
 *     This is where to save the duplicated array.
 *
 * @returns
 *     The duplicated array.
 */
function recursionDeepDup (index, array, duplicatedArray) {
  if (index === array.length) return duplicatedArray;

  if (Array.isArray(array[index])) {
    duplicatedArray.push(recursionDeepDup(0, array[index], []));
  } else {
    duplicatedArray.push(array[index]);
  }

  return recursionDeepDup(index + 1, array, duplicatedArray);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
