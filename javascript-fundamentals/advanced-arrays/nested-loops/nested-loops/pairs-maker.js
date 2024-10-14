// your code here

/**
 * This function takes in a an array as an argument. The
 * function should return a 2D array where the sub arrays
 * represent unique pairs of element from the input array.
 *
 * @param {Array} arr
 *     This is the array to create pairs from.
 *
 * @returns
 *     a 2D array where the sub arrays represent unique pairs
 *     of element from the input array.
 */
function pairsMaker (array) {
  const pairs = [];

  for (let i = 0; i < array.length; i++) {
    const first = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const second = array[j];
      pairs.push([first, second]);
    }
  }

  return pairs;
}

console.log(pairsMaker(["a", "b", "c", "d"])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(["Rosemary", "Alex", "Connor"])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
