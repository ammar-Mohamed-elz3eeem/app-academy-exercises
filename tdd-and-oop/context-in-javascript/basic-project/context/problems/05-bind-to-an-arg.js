/**
 * This function accept a function func and any argument arg.
 * The bindToAnArg function should return the passed-in
 * function func modified to always be invoked with the passed
 * -in argument arg.
 *
 * @param {CallableFunction} func
 *     This is the function to bound argument to it.
 *
 * @param {number} arg
 *     This is the argument to be bound to the function.
 *
 * @returns
 *     return the passed-in function func modified to always
 *     be invoked with the passed-in argument arg.
 */
function bindToAnArg (func, arg) {
  // Your code here
  return func.bind(this, arg);
}

// function add(num1, num2) {
// 	return num1 + num2;
// }

// const addTwo = bindToAnArg(add, 2);
// const addThree = bindToAnArg(add, 3);

// const twoPlusSix = addTwo(6);
// const twoPlusSeven = addTwo(7);
// const threePlusSeven = addThree(7);
// const threePlusEight = addThree(8);
// console.log({
// 	twoPlusSix, // => 8
// 	twoPlusSeven, // => 9
// 	threePlusSeven, // => 10
// 	threePlusEight, // => 11
// });

// function iSpy(thing) {
//   return "I spy a " + thing;
// }

// let spyTree = bindToAnArg(iSpy, "tree");
// console.log(spyTree());        // => I spy a tree
// console.log(spyTree("car"));   // => I spy a tree

// let spyCar = bindToAnArg(iSpy, "car");
// console.log(spyCar());         // => I spy a car
// console.log(spyCar("potato")); // => I spy a car

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;