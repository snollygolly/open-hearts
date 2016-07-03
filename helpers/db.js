"use strict";

// TODO: remove this!
const model = require("../models/game");

module.exports = {
	getGame: function* getGame(id) {
		const game = model.newGame(4);
		game.error = false;
		return game;
	},
	saveGame: function* saveGame(document) {
		const game = model.newGame(4);
		game.error = false;
		return game;
	}
};
