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
		const game = {
			// Maybe hands should be assigned in player?
			hands: handModel.newHands(deckModel.shuffleDeck(deckModel.newDeck(52))),
			// TODO: add an actual id
			id: 0,
			// TODO: generate unique token for sessions
			token: 0,
			state: "waiting",
			// TODO: change this so we allow more than 4
			max_players: 4,
			// FIXME!! The player array should be defined in the player model. For now it is hard coded!
			players: [ playerModel.newPlayer("Player1"), playerModel.newPlayer("Player2"), playerModel.newPlayer("Player3"), playerModel.newPlayer("Player4")
			],
			turns: [

			]
		};
		return game;
	}
};
