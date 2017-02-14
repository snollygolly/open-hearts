"use strict";

/**
 * Deck Model
 * In charge of all things dealing with the deck
 *
 */

const fullDeck = require("./data/cards.json");

module.exports = {
	/**
	* newDeck
	* Creates a new deck and returns it
	*
	* @param {number} cards - The number of cards in the deck (default is 52)
	* @returns {array} deck-  The deck array
	*/
	newDeck: (cards) => {
		// TODO: support differently sized decks
		const deck = [];
		// eslint-disable-next-line guard-for-in
		for (const card in fullDeck) {
			// just the key, not the image
			deck.push(card);
		}
		return deck;
	},
	/**
	* shuffleDeck
	* Creates a new deck and returns it
	*
	* @param {array} deck - A deck object
	* @returns {array} shuffledDeck -  The deck array
	*/
	shuffleDeck: (deck) => {
		const shuffledDeck = deck;
		let currentIndex = shuffledDeck.length;
		let tempValue;
		let randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			tempValue = shuffledDeck[currentIndex];
			shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
			shuffledDeck[randomIndex] = tempValue;
		}
		return shuffledDeck;
	}
};
