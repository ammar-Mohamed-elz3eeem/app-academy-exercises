const Person = require('./person');

// Your code here
class Student extends Person {
	constructor(firstName, lastName, major, GPA) {
		super(firstName, lastName, 18);
		this.major = major;
		this.GPA = GPA;
	}

  /**
   * This method compares the GPA for two given students.
   *
   * @param {Student} student1
   *     This is the first student instance.
   *
   * @param {Student} student2
   *     This is the second student instance.
   *
   * @returns
   *     a string detailing which student's GPA is higher.
   */
  static compareGPA (student1, student2) {
    if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA";
    }
    else if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    }
    return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
  };
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}