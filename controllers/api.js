"use strict";

const db = require("../helpers/db");

const config = require("../config.json");

const gameModel = require("../models/game");

/**
* newGame
* Creates a new game, and sends the client back the information
*
* @param {number} players - How many players is this game for
* @returns {object} body -  Object with status and game
*/
module.exports.newGame = function* newGame() {
	const params = this.request.body;
	if (!params.players) {
		this.status = 400;
		return this.body = {error: true, message: "Must include number of players"};
	}
	const game = gameModel.newGame(parseInt(params.players));
	if (game.error === true) {
		this.status = 400;
		return this.body = {error: true, message: game.message};
	}

	const result = yield db.createGame(game);

	return this.body = result;
	// TODO: some db stuff happens here
};
