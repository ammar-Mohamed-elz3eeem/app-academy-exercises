/**
 * This function prints out the rhombus with the given
 * side length.
 *
 * @param {number} sideLength
 *     This is the length of the given rhombus to print.
 */
function buildRhombusNoReturn (length, width = 0) {
  if (length === 0) {
    return;
  }
  if (width === 2) {
    width = width - 1;
  }
  let string = " ".repeat(length - 1) + "*";
  if (width === 0) {
    console.log(" ".repeat(length - 1) + "*");
  } else {
    console.log(
			string + " ".repeat(width) + string.split("").reverse().join("")
		);
  }
  buildRhombusNoReturn(length - 1, width + 2);
  if (length === 1) {
    return;
  }
  if (width === 0) {
		console.log(" ".repeat(length - 1) + "*");
  } else {
    console.log(
			string + " ".repeat(width) + string.split("").reverse().join("")
		);
  }
}

/**
 * This function returns the string that forms the rhombus
 * shape with the given side length.
 *
 * @param {number} sideLength
 *     This is the length of the given rhombus.
 *
 * @returns
 *     the string that forms the rhombus shape with the
 *     given side length.
 */
function buildRhombusReturn (length) {
  const topPart = buildRhombusOneStarAtTop(length, 0, "");
  const bottomPart = buildRhombusOneStarAtBottom(topPart);
  return topPart + bottomPart;
}

/**
 * This function returns the string that forms the top part
 * of the rhombus shape with the given side length.
 *
 * @param {number} sideLength
 *     This is the length of the given rhombus.
 *
 * @returns
 *     the string that forms the the top part of rhombus
 *     shape with the given side length.
 */
function buildRhombusOneStarAtTop (length, width = 0, string = "") {
  if (length === 0) {
    return string;
  }
  if (width === 0) {
    string = (
			" ".repeat(length - 1) +
			"*\n"
		);
  } else {
    if (width === 2)
      width = width - 1;
    string += " ".repeat(length - 1) + "*" + " ".repeat(width) + "*\n";
  }
  return buildRhombusOneStarAtTop(length - 1, width + 2, string);
}

/**
 * This function returns the string that forms the bottom part
 * of the rhombus shape with the given side length.
 *
 * @param {number} sideLength
 *     This is the length of the given rhombus.
 *
 * @returns
 *     the string that forms the the bottom part of rhombus
 *     shape with the given side length.
 */
function buildRhombusOneStarAtBottom (topPart) {
  return topPart.split("\n").reverse().slice(2).join("\n");
}

buildRhombusNoReturn(5);
console.log(buildRhombusReturn(5));
