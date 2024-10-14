// your code here

/**
 * This function takes in an array of numbers and returns
 * the total product of all numbers multiplied together.
 *
 * @param {Array} array
 *     This is the array to multiply its elements.
 *
 * @returns
 *     the total product of all numbers multiplied together
 */
function productArr(array) {
	// your code here...
	let product = 1;

	for (let i = 0; i < array.length; i++) {
		product *= array[i];
	}

	return product;
}

/**
 * This function takes in a 2D array of numbers as an argument.
 * The function should return the total product of all numbers
 * multiplied together.
 *
 * @param {Array<Array<number>>} twoDimArr
 *     This is the 2D array to get sum of all its elements
 *
 * @returns
 *     the total product of all numbers multiplied together.
 */
function twoDimensionalProduct(array) {
	let totalProduct = 1;

	for (let i = 0; i < array.length; i++) {
		const subArray = array[i];
		totalProduct *= productArr(subArray);
	}

	return totalProduct;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88