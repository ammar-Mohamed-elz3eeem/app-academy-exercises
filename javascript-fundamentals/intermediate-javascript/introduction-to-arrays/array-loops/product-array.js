/**
 * This function takes in an array of numbers. The function
 * should return the total product of multiplying all numbers
 * of the array together. You can assume that nums will not
 * be an empty array.
 *
 * @param {Array} array
 *     This is the array to multiply its elements.
 *
 * @returns
 *     the total product of multiplying all numbers of the array
 *     together.
 */
function productWithReduce(array) {
	// your code here...
	let result = 1;

	for (let i = 0; i < array.length; i++) {
		result *= array[i];
	}

	return result;
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12