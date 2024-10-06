// Your code here

/**
 * This function accepts a string as an argument. The
 * function should return a boolean indicating whether
 * or not the string contains more dots (.) than dashes
 * (-).
 *
 * @param {string} sentence
 *     This is the sentence to check.
 *
 * @returns
 *     a boolean indicating whether or not the string
 *     contains more dots (.) than dashes (-).
 */
function moreDotLessDash (sentence) {
  let numberOfDots = 0;
  let numberOfDashes = 0;

  for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] === ".") numberOfDots++;
		else if (sentence[i] === "-") numberOfDashes++;
	}

  return numberOfDots > numberOfDashes;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false
