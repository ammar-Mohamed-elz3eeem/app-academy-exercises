/**
 * This function takes in a string word and returns
 * the number of e's in the word. The function counts
 * both lowercase (e) and uppercase (E).
 *
 * @param {string} word
 *     The word for which to count the number of e's
 *     in.
 *
 * @returns
 *     the number of e's in the word. The function counts
 *     both lowercase (e) and uppercase (E).
 */
function eCounter (word) {
  let count = 0;
  let index = 0;
  while (index < word.length) {
    let char = word[index];
		if (char === "e" || char === "E") {
			count += 1;
		}
    index++;
  }
	return count;
}

console.log(eCounter("apple")); // => 1
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3
