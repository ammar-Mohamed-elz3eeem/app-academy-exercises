// Your code here
const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
	/**
	 * This is the default constructor for the FriendlyDragon class.
	 *
	 * @param {string} name
	 *     This is the name of the FriendlyDragon instance.
	 *
	 * @param {string} color
	 *     This is the color of the FriendlyDragon instance.
	 *
	 * @param {Array<string>} lifeGoals
	 *     This is the life goals of the FriendlyDragon instance.
	 *
	 * @param {string} friend
	 *     This is the friend of the FriendlyDragon instance.
	 */
	constructor(name, color, lifeGoals, friend) {
		super(name, color);
		this.lifeGoals = lifeGoals;
		this.friend = friend;
	}

	/**
	 * This method console logs every life goal for the FriendlyDragon
	 * instance.
	 */
	hasLifeGoals() {
		this.lifeGoals.forEach((lifeGoal) =>
			console.log(`${this.name} likes to ${lifeGoal}`)
		);
	}

	/**
	 * This method returns a formatted string in this form
	 * "${name} helps their friend ${friend}".
	 *
	 * @returns
	 *     a formatted string in this form
	 *     "${name} helps their friend ${friend}".
	 */
	helpsPeople() {
		return `${this.name} helps their friend ${this.friend}`;
	}
}

module.exports = FriendlyDragon;
