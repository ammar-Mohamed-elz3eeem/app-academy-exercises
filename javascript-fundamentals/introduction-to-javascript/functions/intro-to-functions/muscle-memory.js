/**
 * This function returns a string contains the word
 * "Hello " + the given name.
 *
 * @param {string} name
 *     This is the name to prepend with "Hello "
 *
 * @returns
 *     a string contains the word "Hello " + the given
 *     name.
 */
function sayHello (name) {
  return (`Hello ${name}`);
}

/**
 * This function returns a string contains the word
 * "Bye " + the given name.
 *
 * @param {string} name
 *     This is the name to prepend with "Bye "
 *
 * @returns
 *     a string contains the word "Bye " + the given
 *     name.
 */
function sayGoodBye(name) {
  return (`Bye ${name}`);
}

/**
 * This function returns a string contains the following
 * "I am " + the given age + " years old".
 *
 * @param {string} age
 *     This is the age to put in the sentence.
 *
 * @returns
 *     a string contains the following "I am " the given
 *     age + " years old".
 */
function sayYourAge(age) {
  return (`I am ${age} years old`);
}

/**
 * This function returns the addition of two numbers
 * but in formatted string like this 5 + 5 = 10.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the addition of two numbers but in formatted
 *     string like this 5 + 5 = 10.
 */
function sayAddition(num1, num2) {
	return (`${num1} + ${num2} = ${num1 + num2}`);
}

/**
 * This function returns the subtraction of two numbers
 * but in formatted string like this 5 - 5 = 0.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the subtraction of two numbers but in formatted
 *     string like this 5 - 5 = 0.
 */
function saySubtraction(num1, num2) {
	return `${num1} - ${num2} = ${num1 - num2}`;
}

/**
 * This function returns the division of two numbers
 * but in formatted string like this 5 / 5 = 1.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the division of two numbers but in formatted
 *     string like this 5 / 5 = 1.
 */
function sayDivision(num1, num2) {
	return `${num1} / ${num2} = ${num1 / num2}`;
}

/**
 * This function returns the multiplication of two numbers
 * but in formatted string like this 5 * 5 = 25.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the multiplication of two numbers but in formatted
 *     string like this 5 * 5 = 25.
 */
function sayMultiplication(num1, num2) {
	return `${num1} * ${num2} = ${num1 * num2}`;
}

/**
 * This function returns the average of two numbers
 * but in formatted string like this (5 + 5) / 2 = 5.
 *
 * @param {number} num1
 *     This is the first number.
 *
 * @param {number} num2
 *     This is the second number.
 *
 * @returns
 *     the average of two numbers but in formatted
 *     string like this (5 + 5) / 2 = 5.
 */
function sayAverage(num1, num2) {
	return `(${num1} + ${num2}) / 2 = ${(num1 + num2) / 2}`;
}

/**
 * This functions sums all the numbers in the given
 * array and returns the result of summing all numbers.
 *
 * @param {Array} arr
 * This is the array to sum its elements.
 *
 * @returns
 *     The sum of all numbers in the given array.
 */
function arraySum (arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
}

/**
 * This functions multiplies all the numbers in the given
 * array and returns the result of multiplying all numbers.
 *
 * @param {Array} arr
 * This is the array to multiple its elements.
 *
 * @returns
 *     The multiplication of all numbers in the given array.
 */
function arrayProduct (arr) {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    num *= arr[i];
  }
  return num;
}

console.log(sayHello("Ali")); // Hello Ali
console.log(sayGoodBye("Bahaa")); // Bye Bahaa
console.log(sayYourAge(29)); // I am 29 years old
console.log(sayAddition(15, 10)); // 15 + 10 = 25
console.log(saySubtraction(7, 3)); // 7 - 3 = 4
console.log(sayDivision(7, 3)); // 7 / 3 = 2.333
console.log(sayMultiplication(5, 3)); // 5 * 3 = 15
console.log(sayAverage(5, 3)); // (5 + 3) / 2 = 4
console.log(arraySum([5, 24, 1, 3])); // 33
console.log(arrayProduct([2, 5, 4, 10])); // 400
