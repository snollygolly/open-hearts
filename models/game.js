"use strict";

module.exports = {
	newGame: (players) => {
		return {
			// TODO: add an actual id
			id: 0,
			// TODO: generate unique token for sessions
			token: 0,
			active: true,
			// TODO: change this so we allow more than 4
			max_players: 4,
			players: [

			],
			turns: [

			]
		};
	}
};
