const Person = require('./person');

// Your code here
class Teacher extends Person {
	constructor(firstName, lastName, subject, yearsOfExperience) {
		super(firstName, lastName, 35);
		this.subject = subject;
		this.yearsOfExperience = yearsOfExperience;
	}

	/**
	 * This method takes in an array of Teacher instances,
	 * teachers, as a parameter and returns the sum of the
	 * yearsOfExperience of all teachers.
	 *
	 * @param {Array<Teacher>} teachers
	 *     This is the array of teachers to combine their
	 *     years of experience.
	 *
	 * @returns
	 *     the sum of the yearsOfExperience of all teachers.
	 */
  static combinedYearsOfExperience (teachers) {
    return teachers.reduce(
      (acc, teacher) =>
        acc + teacher.yearsOfExperience, 0);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}