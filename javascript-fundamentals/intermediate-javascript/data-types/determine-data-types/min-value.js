// your code here

/**
 * This function takes in an array of numbers as an arg.
 * The function should return the smallest number of the
 * array. If the array is empty, the function should
 * return null.
 *
 * @param {Array} array
 *     This is the array to get minimum value from.
 *
 * @returns
 *     the smallest number of the array. If the array is
 *     empty, the function should return null.
 */
function minValue (array) {
  let minimum;

  if (array.length === 0)
    return null;

  minimum = array[0]

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num < minimum)
      minimum = num;
  }

  return minimum;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
