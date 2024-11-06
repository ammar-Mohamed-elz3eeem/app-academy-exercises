class Command {
	/**
	 * This is the default constructor for the command object.
	 *
	 * @param {string} key
	 *     This is the key to process its command.
	 *
	 * @param {string} description
	 *     This is a description of the command.
	 *
	 * @param {CallableFunction} action
	 *     This is the action to process when the key is pressed.
	 */
	constructor(key, description, action) {
		this.key = key;
		this.description = description;
		this.action = action;
	}

	/**
	 * This function calls the action that needs to be done when
	 * the command key is pressed.
	 */
	execute() {
		this.action();
	}
}

module.exports = Command;
