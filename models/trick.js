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
	* @param {array} trick - An array of card objects
	* @returns {string} winner -  The ID of the player who took the trick
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
			// the code shouldn't ever get to this point
			// normally you'd return 0 in here for a === b matches
			// but cards can't be the same, and i NEED that coverage to read 100%
			// so you know...
		});
		const winner = cardsRanked.pop();
		return winner.id;
	},
	/**
	* scoreTrick
	* Determines the score of a trick
	*
	* @param {array} trick - An array of card objects
	* @returns {number} score -  The score of this trick
	*/
	scoreTrick: (trick) => {
		const score = trick.reduce((a, b) => {
			const points = (gameConfig.points[b.card] ? gameConfig.points[b.card] : 0);
			return a + points;
		}, 0);
		return score;
	}
};
