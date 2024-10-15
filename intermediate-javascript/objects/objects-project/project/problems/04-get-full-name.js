/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

/**
 * This function takes in an person object and returns
 * a string containing their full name.
 *
 * @param {Object<{firstName, lastName}>} person
 *     This is the object to get fullName from.
 *
 * @returns
 *     a string containing their full name.
 */
function getFullName(person) {
  // Your code here
  const { firstName, lastName } = person;
  return firstName + " " + lastName;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;