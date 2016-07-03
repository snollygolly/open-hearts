"use strict";

const expect = require("chai").expect;

const gameModel = require("../models/game");

let game;
let action;
let newGame;

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
		expect(game.players.length).to.equal(4);
		// empty array for turns, since it hasn't started yet
		expect(game.turns).to.be.an("array");
		expect(game.turns.length).to.equal(0);
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
