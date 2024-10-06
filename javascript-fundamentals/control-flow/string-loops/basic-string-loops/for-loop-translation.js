/**
 * This function takes in a word and returns the number
 * of a's within that word. The function counts both
 * lowercase (a) and uppercase (A).
 *
 * @param {string} word
 *     This is the word for which to count the number of
 *     a's in it.
 *
 * @returns
 *     the number of a's within that word. The function
 *     counts both lowercase (a) and uppercase (A).
 */
function aCounter (word) {
	let count = 0;

  for (let index = 0; index < word.length; index++) {
    let char = word[index];
		if (char === "a" || char === "A") {
			count += 1;
		}
  }

	return count;
}

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3
