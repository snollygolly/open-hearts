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
		expect(hands).to.be.an("array");
		return done();
	});

	it("hands should consist of the correct number of hands", (done) => {
		// TODO: change this with multiple players
		expect(hands.length).to.equal(4);
		return done();
	});

	it("each hand should have the correct number of cards", (done) => {
		// TODO: change this with multiple players
		for (const hand of hands) {
			expect(hand.length).to.equal(13);
		}
		return done();
	});
});
