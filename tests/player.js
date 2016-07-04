"use strict";

const expect = require("chai").expect;

const playerModel = require("../models/player");
const deckModel = require("../models/deck");
const handModel = require("../models/hands");

let player;
let hands;

describe("Player Model - New Player", () => {
	before(() => {
		player = playerModel.newPlayer("test");
	});

	it("player should be a valid object", (done) => {
		expect(player).to.not.be.an("undefined");
		expect(player).to.be.an("object");
		return done();
	});

	it("player should have required properties", (done) => {
		expect(player).to.have.property("id");
		expect(player).to.have.property("name");
		expect(player).to.have.property("hand");
		expect(player).to.have.property("tricks");
		return done();
	});

	it("player should have the correct starting values", (done) => {
		expect(player.id).to.be.a("number");
		expect(player.name).to.equal("test");
		expect(player.hand).to.be.an("array");
		expect(player.hand.length).to.equal(0);
		expect(player.tricks).to.be.an("array");
		expect(player.tricks.length).to.equal(0);
		return done();
	});
});
