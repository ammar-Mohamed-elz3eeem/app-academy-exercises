// Your code here
const Dragon = require('./dragon');

class EvilDragon extends Dragon {
	/**
	 * This is the default constructor for the EvilDragon class.
	 *
	 * @param {string} name
	 *     This is the name of the EvilDragon instance.
	 *
	 * @param {string} color
	 *     This is the color of the EvilDragon instance.
	 *
	 * @param {Array<string>} evilDoings
	 *     This is the an array of bad things the Evil Dragon does.
	 *
	 * @param {string} nemesis
	 *     This is the Evil Dragon's arch-nemesis.
	 */
	constructor(name, color, evilDoings, nemesis) {
		super(name, color);
		this.evilDoings = evilDoings;
		this.nemesis = nemesis;
	}

	/**
	 * this method should console.log out each of the Evil
	 * Dragon's evil doings separately, in the format
	 * "${name} will ${evilDoing}".
	 */
	dontInviteThemOverForDinner() {
		this.evilDoings.forEach((evilDoing) =>
			console.log(`${this.name} will ${evilDoing}`)
		);
	}

	/**
	 * this method should return a string using name and nemesis
	 * property values formatted as "${name} destroys ${nemesis}
	 * with fire! WHOOOSH!!!".
	 *
	 * @returns
	 *     a string using name and nemesis property values formatted
   *     as "${name} destroys ${nemesis} with fire! WHOOOSH!!!".
	 */
  burnsNemesis () {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

module.exports = EvilDragon;
