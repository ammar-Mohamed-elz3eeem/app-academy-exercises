/**
 * This function takes a location, either "FRONT" or "BACK"
 * and adds an element to either the front or back of the
 * given array. If location is anything besides "FRONT" or
 * "BACK", print an error.
 *
 * @param {"FRONT" | "BACK"} location
 *     This is the location to insert from either "FRONT" or "BACK".
 *
 * @param {number} element
 *     This is the number to add to array.
 *
 * @param {Array<number>} arr
 *     This is the array to add element to.
 */
function addToArray (location, element, arr) {
  // Your code here
  if (location === "BACK") {
    arr.push(element);
  } else if (location === "FRONT") {
    arr.unshift(element);
  } else {
    console.log("ERROR");
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]
