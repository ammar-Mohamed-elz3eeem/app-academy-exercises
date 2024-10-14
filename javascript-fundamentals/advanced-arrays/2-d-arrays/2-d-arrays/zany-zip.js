// Your code here

/**
 * This function accepts two arrays as arguments. The
 * function should return a two dimensional array with
 * sub arrays of length 2 that contain elements at
 * corresponding indices from the input arrays. If one
 * of the arrays is shorter than the other, then
 * substitute null for the missing elements.
 *
 * @param {Array<number} array1
 *     This is the first array to zany zip.
 *
 * @param {Array<number} array1
 *     This is the second array to zany zip
 *
 * @returns
 *     a two dimensional array with sub arrays of length 2
 *     that contain elements at corresponding indices from
 *     the input arrays. If one of the arrays is shorter
 *     than the other, then substitute null for the missing
 *     elements.
 */
function zanyZip (array1, array2) {
  const pairs = [];

  if (array1.length > array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array2.length - 1 < i) {
        pairs.push([array1[i], null])
      } else {
        pairs.push([array1[i], array2[i]]);
      }
		}
  } else {
    for (let i = 0; i < array2.length; i++) {
			if (array1.length - 1 < i) {
				pairs.push([null, array2[i]]);
			} else {
				pairs.push([array1[i], array2[i]]);
			}
		}
  }

  return pairs;
}


console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
