"use strict";

/**
 * Deck Model
 * In charge of all things dealing with the deck
 *
 */

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
		const deck = [
			"2H","2S","2C","2D","3H","3S","3C","3D","4H","4S","4C","4D", "5H","5S","5C","5D","6H","6S","6C","6D","7H","7S","7C","7D","8H","8S","8C","8D", "9H","9S","9C","9D","10H","10S","10C","10D","JH","JS","JC","JD","QH","QS","QC","QD","KK","KS","KC","KD","AH","AS","AC","AD"
		];
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
