/**
 * This function takes in a string and console.logs that
 * string "echo-ized".
 *
 * @param {string} string
 *     This is the string to echo-ize.
 */
function echo (string) {
  // your code here...
  const upperString = string.toUpperCase();
  const lowerString = string.toLowerCase();
  console.log(`${upperString} ... ${string} ... ${lowerString}`);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
