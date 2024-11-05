class Person {
	// Your code here

	/**
	 * This function take an array of Person instances. The method will then
	 * call the sayHello() method on each Person instance and store each
	 * returned string in an array, before finally returning an array of the
	 * stored strings.
	 *
	 * @param {Person[]} persons
	 *     This is an array of persons to call sayHello() on.
	 *
	 * @returns
	 *     an array of the result of each person sayHello() result as string.
	 */
  static greetAll (persons) {
    return persons.map(person => person.sayHello());
  }

	/**
	 * This is the default constructor.
	 *
	 * @param {string} name
	 *     This is the name assigned to the person object.
	 *
	 * @param {number} age
	 *     This is the age assigned to the person object.
	 */
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	/**
	 * This method returns a greeting message to the current person.
	 *
	 * @returns
	 *     a greeting message to the current person.
	 */
	sayHello() {
		return `Hi, ${this.name}!`;
	}

	/**
	 * This method return a string stating that this instance
	 * visited the passed-in person instance.
	 *
	 * @param {Person} otherPerson
	 *     This is the other person to visit.
	 *
	 * @returns
	 *     a string stating that this instance visited the passed-in
	 *     person instance
	 */
	visit(otherPerson) {
		if (!(otherPerson instanceof Person))
			throw new TypeError("otherPerson must be instance of person class");
		return `${this.name} visited ${otherPerson.name}`;
	}

	/**
	 * will invoke the `visit` function of the parameter otherPerson,
	 * passing in the current instance as the argument.
	 *
	 * @param {Person} otherPerson
	 *     This is the otherPerson that will visit this person.
	 */
	switchVisit(otherPerson) {
		if (!(otherPerson instanceof Person))
			throw new TypeError("otherPerson must be instance of person class");
		return otherPerson.visit(this);
	}

	/**
	 * This method updates the person object with the given data.
	 *
	 * @param {{name: string, age: string}} data
	 *     This is the object to use its data to set it to the
	 *     person object.
	 */
	update(data) {
		if (!(data.constructor === Object)) {
			throw new TypeError("input must be of type object");
		}
		if (!data.hasOwnProperty("name") || !data.hasOwnProperty("age")) {
			throw new TypeError(
				"object must have name and age as keys with its values"
			);
		}
		this.name = data.name;
		this.age = data.age;
	}

	/**
	 * this method will call the update method with the incoming argument,
	 * and it will have two contexts if the invocation of update was or
	 * was not successful.
	 *
	 * @param {{name: string, age: number}} data
	 *     This is the data to use to update person object.
	 *
	 * @returns
	 *     a boolean indicating whether or not the update method was called
	 *     successfully.
	 */
	tryUpdate(data) {
		try {
			this.update(data);
			return true;
		} catch (error) {
			return false;
		}
	}
}

module.exports = Person;
