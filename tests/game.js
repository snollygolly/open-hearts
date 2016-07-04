"use strict";

const expect = require("chai").expect;

const gameModel = require("../models/game");
const playerModel = require("../models/player");

let game;
let action;
let oldGame;
let newGame;
let player;

describe("Game Model - New Game", () => {
	before(() => {
		// TODO: make this work with more than 4
		game = gameModel.newGame(4);
	});

	it("game should be a valid object", (done) => {
		expect(game).to.not.be.an("undefined");
		expect(game).to.be.an("object");
		return done();
	});

	it("game should have required properties", (done) => {
		expect(game).to.have.property("id");
		expect(game).to.have.property("token");
		expect(game).to.have.property("state");
		expect(game).to.have.property("max_players");
		expect(game).to.have.property("players");
		expect(game).to.have.property("turns");
		return done();
	});

	it("game should have the correct starting values", (done) => {
		expect(game.id).to.be.a("string");
		// 32 char guid + 4 dashes
		expect(game.id.length).to.equal(36);
		expect(game.token).to.be.a("string");
		expect(game.token.length).to.equal(15);
		expect(game.state).to.equal("waiting");
		// TODO: make this work with dynamic max_players
		expect(game.max_players).to.equal(4);
		// should be array with length
		// of 4, for joined players
		expect(game.players).to.be.an("array");
		expect(game.players.length).to.equal(0);
		// empty array for turns, since it hasn't started yet
		expect(game.turns).to.be.an("array");
		expect(game.turns.length).to.equal(0);
		return done();
	});
});

describe("Game Model - Join Game", () => {
	before(() => {
		// TODO: make this work with more than 4
		game = gameModel.newGame(4);
		oldGame = JSON.parse(JSON.stringify(game));
		player = playerModel.newPlayer("Test");
		newGame = gameModel.joinGame(game, player);
	});

	it("game should be a valid object", (done) => {
		expect(newGame).to.not.be.an("undefined");
		expect(newGame).to.be.an("object");
		return done();
	});

	it("game should have the right number of players", (done) => {
		expect(newGame.players.length).to.equal(1);
		return done();
	});

	it("game should have the right name for the new player", (done) => {
		const newPlayer = newGame.players[newGame.players.length - 1];
		expect(newPlayer.name).to.equal("Test");
		return done();
	});

	it("game should have the right hand for the new player", (done) => {
		const newPlayer = newGame.players[newGame.players.length - 1];
		const newHand = oldGame.hands[oldGame.hands.length - 1];
		expect(newPlayer.hand.length).to.equal(newHand.length);
		// if the lengths match and the first card matches, I think it's fair to assume the rest does
		expect(newPlayer.hand[0]).to.equal(newHand[0]);
		return done();
	});
});

describe("Game Model - Join Game [Full]", () => {
	before(() => {
		// TODO: make this work with more than 4
		game = gameModel.newGame(4);
		// join with 4 fake players
		game.players = [
			{},{},{},{}
		];
		player = playerModel.newPlayer("Test");
		newGame = gameModel.joinGame(game, player);
	});

	it("game should be a valid object", (done) => {
		expect(newGame).to.not.be.an("undefined");
		expect(newGame).to.be.an("object");
		return done();
	});

	it("game should have an error", (done) => {
		expect(newGame.error).to.equal(true);
		return done();
	});
});

describe("Game Model - Process Action", () => {
	before(() => {
		// TODO: make this work with more than 4
		game = gameModel.newGame(4);
		// replace with an actual action
		action = {};
		newGame = gameModel.processAction(action, game);
	});

	it("game should be a valid object", (done) => {
		expect(newGame).to.not.be.an("undefined");
		expect(newGame).to.be.an("object");
		return done();
	});
});
