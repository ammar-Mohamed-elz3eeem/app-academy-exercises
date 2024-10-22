// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	/**
   * This method introduce the person by using console.log
   * with a string saying, "Hi, I'm <firstName> <lastName>,
   * and I'm <age> years old.".
   */
	introduce() {
		console.log(
			`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
		);
	}

	/**
	 * This method accepts persons as array of Person instances
	 * and call introduce method for every person instance of
	 * of the persons array.
	 *
	 * @param {Array<Person>} persons
	 *     This is the persons array to introduce them.
	 */
	static introducePeople(persons) {
		if (!Array.isArray(persons)) {
      throw new Error("introducePeople only takes an array as an argument.");
		}
		if (!persons.every((person) => person instanceof Person)) {
      throw new Error("All items in array must be Person class instances.");
		}
		persons.forEach((person) => {
			person.introduce();
		});
	}
}

try {
  module.exports = Person;
} catch {
  module.exports = null;
}