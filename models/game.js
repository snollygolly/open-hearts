"use strict";

/**
 * Game Model
 * In charge of all things dealing with the game object
 *
 */

const Chance = require("chance");
const chance = new Chance();

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
			id: chance.guid(),
			token: chance.hash({length: 15}),
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
	},
	/**
	* processAction
	* Accepts player actions and performs them
	*
	* @param {object} action - An object describing the action
	* @param {object} game - A game object (may be a partial game object)
	* @returns {object} game -  The full game object
	*/
	processAction: (action, game) => {
		return game;
	}
};
