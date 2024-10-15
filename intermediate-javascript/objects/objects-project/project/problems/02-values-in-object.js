/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

/**
 * This function takes in an object and returns 
 * an array of all the values within that Object.
 *
 * @param {Object} obj
 *     This is the object to extract all its values.
 *
 * @returns
 *     an array of all the values within that Object.
 */
function valuesInObject(obj) {
	// Your code here
	// Using for in loops
	const objectValues = [];

	for (let key in obj) {
		objectValues.push(obj[key]);
	}

	return objectValues;

	// Using Object.values()
	// return Object.values(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;