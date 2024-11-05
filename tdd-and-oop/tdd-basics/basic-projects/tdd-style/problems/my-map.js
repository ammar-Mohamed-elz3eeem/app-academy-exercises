/**
 * take an array and a callback, and then return a new array where
 * the callback has been called upon each element in the original
 * array.
 * 
 * The function doesn't mutate the original argument array.
 *
 * @param {Array} inputArray
 *     This is the array to loop over it elements.
 *
 * @param {CallableFunction} callback
 *     This is the callback to call on each element of the array.
 *
 * @returns
 *     a new array where the callback has been called upon each
 *     element in the original array.
 */
function myMap (inputArray, callback) {
  // Your code here
  const newArr = [];

  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    newArr.push(callback(element));
  }

  return newArr;
}

module.exports = myMap;
