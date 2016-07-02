"use strict";

/**
 * Game Model
 * In charge of all things dealing with the game object
 *
 */

const deckModel = require("./deck");
const handModel = require("./hands");
const playerModel = require("./player");

module.exports = {
	/**
	* newGame
	* Creates a new game object and returns it
	*
	* @param {number} players - The total amount of players in this game
	* @returns {object} game -  The full game object
	*/
	newGame: (players) => {
		const crispDeck = deckModel.newDeck(52);
		const shuffledDeck = deckModel.shuffleDeck(crispDeck);
		const playerHands = handModel.newHands(shuffledDeck);
		const game = {
			// TODO: add an actual id
			id: 0,
			// TODO: generate unique token for sessions
			token: 0,
			state: "waiting",
			// TODO: change this so we allow more than 4
			max_players: 4,
			players: [],
			turns: []
		};
		// populate players
		let i = 0;
		while (i < 4) {
			const player = playerModel.newPlayer(`Player ${i + 1}`, playerHands[i]);
			game.players.push(player);
			i++;
		}
		return game;
	}
};
