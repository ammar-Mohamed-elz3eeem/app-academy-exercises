/**
 * This function accept a function func and two objects,
 * obj1 and obj2. callOnTarget should return the result
 * of the function func invoked with obj1 as its context
 * and obj2 as the first argument.
 *
 * @param {CallableFunction} func
 *     This is the function to bind to obj1 context.
 *
 * @param {Object} obj1
 *     This is the context to bind to the given func.
 *
 * @param {Object} obj2
 *     This is the first argument to the given func.
 *
 * @returns
 *     the result of the function func invoked with obj1
 *     as its context and obj2 as the first argument.
 */
function callOnTarget (func, obj1, obj2) {
  // Your code here
  return func.call(obj1, obj2);
}

// const cat = {
//   name: "Breakfast"
// };

// const mouse = {
//   name: "Jerry"
// };

// function greet(other) {
//   return "I'm " + this.name + ". Nice to meet you, " + other.name;
// }

// console.log(callOnTarget(greet, cat, mouse));
// // "I'm Breakfast. Nice to meet you, Jerry"

// console.log(callOnTarget(greet, mouse, cat));
// // "I'm Jerry. Nice to meet you, Breakfast"

// const dog = {
//   name: "Noodles",
//   chase: function(animal) {
//     return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
//   }
// };

// console.log(callOnTarget(dog.chase, cat, dog));
// // "Woof, my name is Breakfast and I'm chasing Noodles"


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;