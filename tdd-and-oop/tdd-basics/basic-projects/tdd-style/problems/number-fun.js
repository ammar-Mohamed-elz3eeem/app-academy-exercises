/**
 * This function will always return 3.
 */
function returnsThree () {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n < 1 || n > 1000000)
    throw new RangeError("number must be in range 1 to 1000000 inclusive");
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};