"use strict";

const config = require("../config.json");
const app = require("../index").app;
const io = app.io;
const db = require("../helpers/db");
const session = require("../helpers/session");

const co = require("co");

io.on("connection", co(function* co(ctx, data) {
	const players = yield session.connectPlayer(data.id);
	io.broadcast("connect", players);
	console.log("join event fired", data);
}).catch(onError));

io.on("disconnect", co(function* co(ctx, data) {
	const players = yield session.disconnectPlayer(data.id);
	io.broadcast("disconnect", players);
	console.log("leave event fired", data);
}).catch(onError));

io.on("fetch", co(function* co(ctx, data) {
	let game = yield db.getGame(data.id);
	if (game.error === true) {
		// something went wrong during load
		console.log("Something went wrong during game retrieval");
		io.socket.emit("fetch", JSON.stringify(game));
		return;
	}
	io.socket.emit("fetch", JSON.stringify(game));
}).catch(onError));

io.on("action", co(function* co(ctx, data) {
	let game = yield db.getGame(data.id);
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
}).catch(onError));

function onError(err) {
	// log any uncaught errors
	// co will not throw any errors you do not handle!!!
	// HANDLE ALL YOUR ERRORS!!!
	console.error("socket error...");

}
