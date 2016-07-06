"use strict";

const expect = require("chai").expect;

const playerModel = require("../models/player");
const deckModel = require("../models/deck");
const handModel = require("../models/hand");
const gameModel = require("../models/game");

let game;
let player;
let hands;
let id;

describe("Player Model - New Player", () => {
	before(() => {
		player = playerModel.newPlayer("test", "12345");
	});

	it("player should be a valid object", (done) => {
		expect(player).to.not.be.an("undefined");
		expect(player).to.be.an("object");
		return done();
	});

	it("player should have required properties", (done) => {
		expect(player).to.have.property("id");
		expect(player).to.have.property("socket");
		expect(player).to.have.property("name");
		expect(player).to.have.property("hand");
		expect(player).to.have.property("tricks");
		return done();
	});

	it("player should have the correct starting values", (done) => {
		expect(player.id).to.be.a("number");
		expect(player.socket).to.equal("12345");
		expect(player.name).to.equal("test");
		expect(player.hand).to.be.an("array");
		expect(player.hand.length).to.equal(0);
		expect(player.tricks).to.be.an("array");
		expect(player.tricks.length).to.equal(0);
		return done();
	});
});

describe("Player Model - Get ID From Socket", () => {
	before(() => {
		game = gameModel.newGame(4);
		player = playerModel.newPlayer("test", "12345");
		game = gameModel.joinGame(game, player);
		id = playerModel.getIDFromSocket(game, "12345");
	});

	it("id should be valid", (done) => {
		expect(id).to.be.a("number");
		return done();
	});

	it("id should be correct", (done) => {
		expect(id).to.equal(player.id);
		return done();
	});
});

describe("Player Model - Get ID From Socket [Invalid Socket]", () => {
	before(() => {
		game = gameModel.newGame(4);
		player = playerModel.newPlayer("test", "12345");
		game = gameModel.joinGame(game, player);
		id = playerModel.getIDFromSocket(game, "123456");
	});

	it("id should be valid", (done) => {
		expect(id).to.be.a("boolean");
		return done();
	});

	it("id should be correct", (done) => {
		expect(id).to.equal(false);
		return done();
	});
});
