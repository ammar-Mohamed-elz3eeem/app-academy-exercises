// Your code here
class CallCenter {
	/**
	 * This is the default constructor for CallCenter object.
	 *
	 * @param {string} name
	 *     This is the name to assign to call center agent.
	 */
	constructor(name) {
		this.name = name;
	}

	/**
	 * This function prints a string to the console with the
	 * name.
	 */
	sayHello() {
		console.log(`Hello this is ${this.name}`);
	}

	/**
	 * This function takes in a delay in milliseconds that
	 * will call the sayHello() method on the instance after
	 * the delay. The context of the sayHello() method when
	 * invoked needs to be the CallCenter instance that the
	 * method was called on.
	 *
	 * @param {number} delay
	 *     This is the delay in milliseconds.
	 */
	callMeLater (delay) {
		setTimeout(() => {
			this.sayHello();
		}, delay);
	}
}

// let judy = new CallCenter("Judy");
// judy.sayHello();         // prints "Hello this is Judy"
// judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"

// let melan = new CallCenter("Melan");
// melan.sayHello();        // prints "Hello this is Melan"
// melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}