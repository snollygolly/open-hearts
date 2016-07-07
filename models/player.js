"use strict";

/**
 * Player Model
 * In charge of all things dealing with the player object
 *
 */

const Chance = require("chance");
const chance = new Chance();

module.exports = {
	/**
	* newPlayer
	* Creates a new player object and returns it
	*
	* @param {string} name - The name of the player to create
	* @param {string} socket - The ID of the socket the player is connected to
	* @returns {object} player -  The player object
	*/
	newPlayer: (name, socket) => {
		const player = {
			id: chance.hammertime(),
			socket: socket,
			name: name,
			// TODO: generate a hand based off newHand in the hand model
			hand: [],
			tricks: []
		};
		return player;
	},
	/**
	* getIDFromSocket
	* Gets the ID of the player connected with this socket
	*
	* @param {object} game - The full game object
	* @param {string} socket - The ID of the socket the player is connected to
	* @returns {string | boolean} player -  The player ID or false if no player found
	*/
	getIDFromSocket: (game, socket) => {
		for (const player of game.players) {
			if (player.socket === socket) {
				// this is a match, this player is currently in the game
				return player.id;
			}
		}
		return false;
	}
};
