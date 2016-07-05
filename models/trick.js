"use strict";

/**
 * Trick Model
 * In charge of everything trick related (scoring, who takes the trick, etc.)
 *
 */

const deckModel = require("./deck");
const gameConfig = require("../game.json");

module.exports = {
	/**
	* determineWinner
	* Determines who wins the trick and returns the result
	* NOTE: this is not to be confused with game winning.  "winning" a trick in
	* hearts isn't always a good thing
	*
	* @param {array} cards - An array of card objects
	* @returns {object} card -  The full game object
	*/
	determineWinner: (trick) => {
		const ledSuit = trick[0].card.substr(-1);
		const cardsRanked = trick.sort((a, b) => {
			// get the values of both cards
			const aCard = a.card;
			const bCard = b.card;
			// get the card suits
			const aSuit = aCard.substr(-1);
			const bSuit = bCard.substr(-1);
			// get just the values for both cards
			const aValue = aCard.slice(0, -1);
			const bValue = bCard.slice(0, -1);
			// get the slightly shorter reference guide for values
			const valueRef = gameConfig.value;
			if (valueRef[aValue] > valueRef[bValue] || bSuit !== ledSuit) {
				return 1;
			}
			if (valueRef[aValue] < valueRef[bValue] || aSuit !== ledSuit) {
				return -1;
			}
			// a must be equal to b
			return 0;
		});
		const winner = cardsRanked.pop();
		return winner.id;
	}
};
