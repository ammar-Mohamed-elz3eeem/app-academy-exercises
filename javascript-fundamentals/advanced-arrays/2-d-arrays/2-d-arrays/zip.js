// Your code here

/**
 * This function accepts two arrays as arguments. The
 * function should return a two dimensional array with
 * sub arrays of length 2 that contain elements at
 * corresponding indices from the input arrays. You may
 * assume that the input arrays have the same length.
 *
 * @param {Array} array1
 *     This is the first array to ZIP.
 *
 * @param {Array} array2
 *     This is the second array to ZIP.
 *
 * @returns
 *     two dimensional array with sub arrays of length 2
 *     that contain elements at corresponding indices from
 *     the input arrays.
 */
function zip (array1, array2) {
  const pairs = [];

  for (let i = 0; i < array1.length; i++) {
    pairs.push([array1[i], array2[i]]);
  }

  return pairs;
}

console.log(zip([1, 2, 3, 4], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
