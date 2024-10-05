/**
 * Takes in a string and returns that string "echo-ized". E.g.
 * echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
 *
 * @param {string} str
 *     This is the string to echo-ize.
 *
 * @returns
 *     The echo-ized version of the string
 */
function echo (str) {
  console.log(`${str.toUpperCase()} ... ${str} ... ${str.toLowerCase()}`);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"