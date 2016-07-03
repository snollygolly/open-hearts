"use strict";

let players = [];

module.exports = {
	connectPlayer: function* connectPlayer(player) {
		// TODO: make this functional
		players.push(player);
		return players;
	},
	disconnectPlayer: function* disconnectPlayer(player) {
		// TODO: make this functional
		players.pop();
		return players;
	}
};
