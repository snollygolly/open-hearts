"use strict";

const config = require("../config.json");
const app = require("../index").app;
const io = app.io;
const db = require("../helpers/db");
const session = require("../helpers/session");

const co = require("co");

io.on("connection", co.wrap(function* co(ctx, data) {
	io.broadcast("connect", players);
	console.log("join event fired", data);
}));

io.on("disconnect", co.wrap(function* co(ctx, data) {
	const players = yield session.disconnectPlayer(data.id);
	io.broadcast("disconnect", players);
	console.log("leave event fired", data);
}));

io.on("join", co.wrap(function* co(ctx, data) {
	// replace everything but letters, numbers, and spaces
	const cleanedName = data.replace(/[^a-zA-Z0-9 ]/g, "");
	const game = yield db.getGame(data);
	if (game.error === true) {
		// something went wrong during load
		console.log("Something went wrong during game retrieval");
		io.socket.emit("join", JSON.stringify(game));
		return;
	}
	// try to join the game
	const players = yield session.connectPlayer(data.id);
	if (game.error === true) {
		// something went wrong during load
		console.log("Something went wrong during action performing");
		io.socket.emit("join", JSON.stringify(game));
		return;
	}
	console.log(game);
	io.socket.emit("join", JSON.stringify(game));
}));

io.on("fetch", co.wrap(function* co(ctx, data) {
	const game = yield db.getGame(data);
	if (game.error === true) {
		// something went wrong during load
		console.log("Something went wrong during game retrieval");
		io.socket.emit("fetch", JSON.stringify(game));
		return;
	}
	io.socket.emit("fetch", JSON.stringify(game));
}));

io.on("action", co.wrap(function* co(ctx, data) {
	let game = yield db.getGame(data);
	if (game.error === true) {
		// something went wrong during load
		console.log("Something went wrong during game retrieval");
		io.socket.emit("action", JSON.stringify(game));
		return;
	}
	game = model.processAction(data.action, game);
	if (game.error === true) {
		// something went wrong during load
		console.log("Something went wrong during action performing");
		io.socket.emit("action", JSON.stringify(game));
		return;
	}
	io.socket.emit("action", JSON.stringify(game));
	// TODO: don't actually send out the entire game object, send a pruned version
	io.broadcast("action", game);
}));
