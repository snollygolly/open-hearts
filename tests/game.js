"use strict";

const expect = require("chai").expect;

const gameModel = require("../models/game");

let game;

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
		expect(game).to.have.property("oldDeck");
		expect(game).to.have.property("newDeck");
		expect(game).to.have.property("hands");
		return done();
	});

	it("game should have the correct starting values", (done) => {
		// TODO: connect to actual ID generation
		expect(game.id).to.equal(0);
		// TODO: connect to token generation
		expect(game.token).to.equal(0);
		expect(game.state).to.equal("waiting");
		// TODO: make this work with dynamic max_players
		expect(game.max_players).to.equal(4);
		// should be array with length
		// of 4, for joined players
		expect(game.players).to.be.an("array");
		expect(game.players.length).to.equal(4);
		for (const player of game.players) {
			expect(player.hand.length).to.be.equal(13);
		}
		// empty array for turns, since it hasn't started yet
		expect(game.turns).to.be.an("array");
		expect(game.turns.length).to.equal(0);
		expect(game.hands).to.be.an("array");
		expect(game.hands.length).to.equal(4);
		for (const hand of game.hands) {
			expect(hand.length).to.equal(13);
		}

		return done();
	});
});
