"use strict";

/**
 * Game Model
 * In charge of all things dealing with the game object
 *
 */

const deckModel = require("./deck");
const handModel = require("./hands");
const playerModel = require("./player");
const oldDeck = deckModel.newDeck(52);
const newDeck = deckModel.shuffleDeck(oldDeck);
const hands = handModel.newHands(newDeck);
const player1 = playerModel.newPlayer("Player1", hands[0]);
const player2 = playerModel.newPlayer("Player2", hands[1]);
const player3 = playerModel.newPlayer("Player3", hands[2]);
const player4 = playerModel.newPlayer("Player4", hands[3]);

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
			oldDeck: oldDeck,
			newDeck: newDeck,
			hands: hands,
			player1: player1,
			player2: player2,
			player3: player3,
			player4: player4,
			// TODO: add an actual id
			id: 0,
			// TODO: generate unique token for sessions
			token: 0,
			state: "waiting",
			// TODO: change this so we allow more than 4
			max_players: 4,
			// FIXME!! The player array should be defined in the player model. For now it is hard coded!
			players: [ player1, player2, player3, player4
			],
			turns: [

			]
		};
		return game;
	}
};
