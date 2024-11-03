// 1.
function sum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

try {
  let res = sum(null);
	console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("TypeError is thrown here");
  } else {
    console.log("Unhandled Exception");
  }
}

// 2.

/**
 * This method prints the given name in the following format
 * `Hi, ${name}!`. If the given name is not a string an error
 * will be thrown.
 *
 * @param {string} name
 *     This is the name to say his name in the console.
 */
function sayName (name) {
  if (typeof name !== "string") {
    throw new Error("Invalid name! Must be a string!");
  }
  console.log(`Hi, ${name}!`);
}

// tests
try {
  sayName("Alex");
	sayName(1);
} catch (error) {
  if (error instanceof Error) {
    console.log("Error is thrown.");
  } else {
    console.log("unhandled exception.");
  }
}
// Your code here

// 3.
function greet(greeting) {
	if (!greeting) {
		throw new Error("There was no greeting given.");
	}

	console.log(greeting);
}

try {
  greet("Hi, There!");
  greet("");
} catch (error) {
  console.log("Hello World!");
}
