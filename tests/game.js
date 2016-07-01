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
		expect(game).to.have.property("deck");
		expect(game).to.have.property("newDeck");
		expect(game).to.have.property("hands");
		expect(game).to.have.property("player1");
		expect(game).to.have.property("player2");
		expect(game).to.have.property("player3");
		expect(game).to.have.property("player4");
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
		// empty array for turns, since it hasn't started yet
		expect(game.turns).to.be.an("array");
		expect(game.turns.length).to.equal(0);
		expect(game.deck).to.be.an("array");
		expect(game.deck.length).to.equal(52);
		expect(game.newDeck).to.be.an("array");
		expect(game.newDeck.length).to.equal(52);
		expect(game.hands).to.be.an("array");
		expect(game.hands.length).to.equal(4);
		return done();
	});
});
