/**
 * This function changes the context of the given function
 * to be the context of the given object.
 *
 * @param {CallableFunction} func
 *     This is the function to change its context.
 *
 * @param {Object} obj
 *     This is the new context to attach to function.
 *
 * @returns
 *     return the result of the function func invoked with the
 *     object obj as its context.
 */
function changeContext (func, obj) {
  // Your code here
  return func.call(obj);
}

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function extractName() {
//   return this.name;
// }

// const kristen = new Person('Kristen');
// console.log(changeContext(extractName, kristen)); // => Kristen

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;