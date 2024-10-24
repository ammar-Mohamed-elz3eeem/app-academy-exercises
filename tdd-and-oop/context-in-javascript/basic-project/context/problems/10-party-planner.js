// Your code here
class PartyPlanner {
	/**
	 * This is the default constructor.
	 */
	constructor() {
		this.guestList = [];
	}

	/**
	 * This method adds the given name to the guest list.
	 *
	 * @param {string} name
	 *     This is the name to add to the guestList.
	 */
	addToGuestList(name) {
		this.guestList.push(name);
	}

	/**
	 * This method returns a string depending on the number
	 * of people invited to the party.
	 *
	 * @returns
	 *     a string depending on the number of people
	 *     invited to the party.
	 */
	throwParty() {
		if (this.guestList.length === 0)
			return "Gotta add people to the guest list";
		return `Welcome to the party ${this.guestList.join(" and ")}`;
	}
}

// const party = new PartyPlanner();

// console.log(party.throwParty()); // prints "Gotta add people to the guest list"

// party.addToGuestList("James");
// console.log(party.throwParty()); // prints "Welcome to the party James"

// party.addToGuestList("Alvin");
// console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

// const party2 = new PartyPlanner();
// console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

// party2.addToGuestList("Lucy");
// console.log(party2.throwParty()); // prints "Welcome to the party Lucy"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}