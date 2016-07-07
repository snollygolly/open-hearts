"use strict";

/**
 * Hands Model
 * In charge of all things dealing with the hands
 *
 */

module.exports = {
	/**
	* newHands
	* Creates 4 new hands and returns it
	*
	* @param {array} deck - A deck object
	* @returns {array} hands -  4 hand arrays
	*/
	newHands: (deck) => {
		const hands = [];
		for (let i = 0; i < 4; i++) {
			hands.push(deck.splice(0, 13));
		}
		return hands;
	}
};
