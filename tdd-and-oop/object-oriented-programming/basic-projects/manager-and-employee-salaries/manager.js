const Employee = require('./employee');

class Manager extends Employee {
	constructor(name, salary, title, manager) {
		super(name, salary, title, manager);
		this.employees = [];
	}

	/**
	 * This method should add an `Employee` instance to a `Manager`
	 * instance's `employees` array.
	 *
	 * @param {Employee} employee
	 *     This is the employee to add to the list of employees.
	 */
	addEmployee(employee) {
		this.employees.push(employee);
	}

	/**
	 * This method calculates the bonus for this manager.
	 *
	 * @param {number} multiplier
	 *     This is the bonus percentage to give to this manager.
	 *
	 * @returns
	 *     The salary of this manager multiplied by the given
	 *     multiplier.
	 */
	calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
	}

	/**
	 * This method recursively determine the total salary for manager.
   *
   * @returns
   *     The total salary for the given employees.
	 */
  _totalSubSalary () {
    return this.employees.reduce((curr, employee) => {
      if (employee instanceof Manager) {
        curr += employee._totalSubSalary();
      }
      return curr + employee.salary;
    }, 0);
  }
}

module.exports = Manager;
