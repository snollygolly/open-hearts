"use strict";

/**
 * Game Model
 * In charge of all things dealing with the game object
 *
 */

const Chance = require("chance");
const chance = new Chance();

const deckModel = require("./deck");
const handModel = require("./hand");
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
			error: false,
			id: chance.guid(),
			token: chance.hash({length: 15}),
			state: "waiting",
			// TODO: change this so we allow more than 4
			hands: playerHands,
			max_players: 4,
			players: [],
			turns: []
		};
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
	},
	/**
	* joinGame
	* Attempts to join a game
	*
	* @param {string} game - The full game object
	* @param {array} player - The player trying to join
	* @returns {object} game -  The full game object
	*/
	joinGame: (game, player) => {
		// loop through all the players
		for (const seat of game.players) {
			if (seat.id === null) {
				seat.id = player.id;
				seat.name = player.name;
				return game;
			}
		}
		// check to see if the game is full
		if (game.players.length >= game.max_players) {
			game.error = true;
			game.message = "Game is full";
			return game;
		}
		// get his hand
		player.hand = game.hands.pop();
		// add him to the players array
		game.players.push(player);
		return game;
	},
	/**
	* leaveGame
	* Removes a player from a game
	*
	* @param {string} game - The full game object
	* @param {array} player - The player being removed
	* @returns {object} game -  The full game object
	*/
	leaveGame: (game, player) => {
		// loop through all the players
		for (const seat of game.players) {
			if (seat.id === player.id) {
				seat.id = null;
				seat.name = null;
				return game;
			}
		}
		game.error = true;
		game.message = "Game is full";
		return game;
	}
};
