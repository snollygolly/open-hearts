"use strict";

/**
 * Game Model
 * In charge of all things dealing with the game object
 *
 */

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
			// TODO: add an actual id
			id: 0,
			// TODO: generate unique token for sessions
			token: 0,
			state: "waiting",
			// TODO: change this so we allow more than 4
			max_players: 4,
			players: [

			],
			turns: [

			]
		};
		return game;
	}
};
