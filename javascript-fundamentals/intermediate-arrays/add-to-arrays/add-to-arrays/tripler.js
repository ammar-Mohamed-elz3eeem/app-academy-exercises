  // your code here

  /**
   * This function takes in an array as an arg. The function
   * should return a new array containing three times every
   * number of the original array.
   *
   * @param {Array<number>} array
   *     This is the array to triple its numbers.
   *
   * @returns
   *     a new array containing three times every number of the
   *     original array.
   */
  function tripler (array) {
    const tripledArr = [];

    for (let i = 0; i < array.length; i++) {
      tripledArr.push(array[i] * 3);
    }

    return tripledArr;
  }

  console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
  console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
