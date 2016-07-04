"use strict";

const config = require("../config.json");
const app = require("../index").app;
const io = app.io;
const db = require("../helpers/db");
const gameModel = require("../models/game");
const playerModel = require("../models/player");

const co = require("co");

io.on("connection", (ctx, data) => {
	console.log("join event fired", data);

	/**
	* join handler
	* Listens for players attempting to join a game
	*
	* @param {string} data.game - The game ID
	* @param {string} data.name - The player's name
	* @returns {object} game -  The full game object
	*/
	ctx.socket.on("join", (data) => {
		// According to the docs, this needs to be nested
		co(function* co() {
			const payload = data;

			// replace everything but letters, numbers, and spaces
			const cleanedName = payload.name.replace(/[^a-zA-Z0-9 ]/g, "");
			let game = yield db.getGame(payload.game);
			if (game.error) {
				console.log("Something went wrong during game retrieval");
				return ctx.socket.emit("onError", game.message);
			}

			// Create player model and join game
			const player = playerModel.newPlayer(cleanedName);
			game = gameModel.joinGame(game.message, player);
			if (game.error) {
				console.log("Something went wrong during joining");
				return ctx.socket.emit("onError", game.message);
			}

			// Save new game with new player
			game = yield db.saveGame(game);
			if (game.error) {
				console.log("Something went wrong during saving");
				return ctx.socket.emit("onError", game.message);
			}

			// Send game data to game
			return io.broadcast("onJoin", game.message);
		}).catch(onError);
	});
});

io.on("disconnect", (ctx, data) => {
	co(function* co() {
		io.broadcast("disconnected");
		console.log("leave event fired", data);
	}).catch(onError);
});

io.on("fetch", (ctx, data) => {
	co(function* co() {
		const game = yield db.getGame(data);
		if (game.error === true) {
			// something went wrong during load
			console.log("Something went wrong during game retrieval");
			return JSON.stringify(game);
		}

		JSON.stringify(game);
	}).catch(onError);
});

io.on("action", (ctx, data) => {
	co(function* co() {
		let game = yield db.getGame(data);
		if (game.error === true) {
			// something went wrong during load
			console.log("Something went wrong during game retrieval");
			return JSON.stringify(game);
		}
		game = model.processAction(data.action, game);
		if (game.error === true) {
			// something went wrong during load
			console.log("Something went wrong during action performing");
			return JSON.stringify(game);
		}
		JSON.stringify(game);
		// TODO: don't actually send out the entire game object, send a pruned version
		io.broadcast("action", game);
	}).catch(onError);
});

function onError(err) {
	console.log("error!");
	console.error(err);
}
