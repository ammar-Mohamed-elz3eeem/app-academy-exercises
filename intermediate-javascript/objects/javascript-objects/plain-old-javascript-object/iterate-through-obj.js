/**
 * This function prints out all key-value pairs of an object.
 * The format should be key - value.
 *
 * @param {Object} obj
 *     This is the object to print its key-value pairs.
 */
function printObject (obj) {
  // your code here...
  for (let key in obj) {
    console.log(`${key} - ${obj[key]}`);
  }
}

let bootcamp = {
	name: "App Academy",
	color: "Red",
	population: 120,
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
