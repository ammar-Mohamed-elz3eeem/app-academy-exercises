class Employee {
	/**
	 * This is the default constructor for this class.
	 *
	 * @param {string} name
	 *     This is the name of the employee.
	 *
	 * @param {number} salary
	 *     This is the salary of the employee.
	 *
	 * @param {string} title
	 *     This is the title of the employee.
	 *
	 * @param {Manager|null} manager
	 *     This is the manager of this employee.
	 */
	constructor(name, salary, title, manager = null) {
		this.name = name;
		this.salary = salary;
		this.title = title;
		this.manager = manager;

		if (manager !== null) {
			this.manager.addEmployee(this);
		}
	}

  /**
   * This method calculates the bonus for this employee.
   *
   * @param {number} multiplier
   *     This is the bonus percentage to give to this employee.
   *
   * @returns
   *     The salary of this employee multiplied by the given
   *     multiplier.
   */
  calculateBonus (multiplier) {
    return this.salary * multiplier;
  };
}

module.exports = Employee;
