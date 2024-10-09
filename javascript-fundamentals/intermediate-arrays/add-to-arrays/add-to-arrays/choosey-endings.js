// Your code here

/**
 * This function accepts an array of words and a suffix
 * string as arguments. The function should return a new
 * array containing the words that end in the given suffix.
 * If the value passed in is not an array, return an empty
 * array. 
 *
 * @param {Array<string>} words
 *     This is the array of words to filter.
 *
 * @param {string} suffix
 *     This is the suffix.
 *
 * @returns
 *     a new array containing the words that end in the given
 *     suffix. If the value passed in is not an array, return
 *     an empty array. 
 */
function chooseyEndings (words, suffix) {
  const wordsWithSuffix = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith(suffix)) {
      wordsWithSuffix.push(words[i]);
    }
  }

  return wordsWithSuffix;
}

console.log(
	chooseyEndings(
		["family", "hound", "catalyst", "fly", "timidly", "bond"],
		"ly"
	)
);
// [ 'family', 'fly', 'timidly' ]

console.log(
	chooseyEndings(
		["family", "hound", "catalyst", "fly", "timidly", "bond"],
		"nd"
	)
);
// [ 'hound', 'bond' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "icity"));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "ily"));
// [ ]

console.log(chooseyEndings(17, "ily"));
// [ ]
