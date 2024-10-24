// Your code here
class Dog {
	/**
	 * This function creates new dog with the name Jet.
	 *
	 * @returns
	 *     the new dog object with the name Jet.
	 */
	static makeJet() {
		return new Dog("Jet");
	}

	/**
	 * This is the default constructor.
	 *
	 * @param {string} name
	 *     This is the name of the dog to create.
	 */
	constructor(name) {
		this.name = name;
	}

	/**
	 * This method changes the dog object name to the new
	 * given name.
	 *
	 * @param {string} newName
	 *     This is the new name to assign to the dog object.
	 *
	 * @returns
	 *     the new name of the dog.
	 */
	changeName(newName) {
		this.name = newName;
		return this.name;
	}

	/**
	 * This method returns this message "${name} says ${word}".
	 *
	 * @param {string} word
	 *     This is the word that needs to be sent to
	 *     dog to say.
	 *
	 * @returns
	 *     a string formatted like this "${name} says ${word}".
	 */
	speak(word) {
		return `${this.name} says ${word}`;
	}
}

let dog1 = Dog.makeJet(); // returns an object

console.log(dog1.name);                 // Jet
console.log(dog1.speak("hello"));       // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name);                 // Freyja
console.log(dog1.speak("hello"));       // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name);                 // Jet

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}