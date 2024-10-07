// your code here

/**
 * This function takes in an array of numbers as an arg.
 * The function should return the largest number of the
 * array. If the array is empty, the function should
 * return null.
 *
 * @param {Array} array
 *     This is the array to get maximum value from.
 *
 * @returns
 *     the largest number of the array. If the array is
 *     empty, the function should return null.
 */
function maxValue(array) {
	let maximum;

	if (array.length === 0) return null;

	maximum = array[0];

	for (let i = 0; i < array.length; i++) {
		const num = array[i];
		if (num > maximum) maximum = num;
	}

	return maximum;
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
