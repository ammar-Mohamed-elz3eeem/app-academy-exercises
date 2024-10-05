/**
 * This function add the string is cool to the given
 * string and prints it in console and returns.
 *
 * @param {string} string
 *     This is the string to append is cool to it.
 *
 * @returns
 *     The given string with is cool appended to it.
 */
function isCool (string) {
	let coolSentence = string + " is cool!";
	console.log(coolSentence);
	return coolSentence;
}

// Call the above function passing in the below arguments:
// Music
// JavaScript
// The world
isCool("Music");
isCool("JavaScript");
isCool("The world");
