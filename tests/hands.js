"use strict";

const expect = require("chai").expect;

const deckModel = require("../models/deck");
const handsModel = require("../models/hands");

let deck;
let newDeck;
let hands;

describe("Hands Model - New Hands", () => {
	before(() => {
		deck = deckModel.newDeck(52);
		newDeck = deckModel.shuffleDeck(deck);
		hands = handsModel.newHands(newDeck);
	});

	it("hands should be a valid array", (done) => {
		expect(hands).to.not.be.an("undefined");
		expect(hands).to.be.an("array");
		return done();
	});

	it("hands should require an array", (done) => {
		expect(deck).to.be.an("array");
		return done();
	});
});
