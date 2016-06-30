"use strict";

const expect = require("chai").expect;

const deckModel = require("../models/deck");

let deck;
let oldDeck;
let newDeck;

describe("Deck Model - New Deck", () => {
	before(() => {
		deck = deckModel.newDeck(52);
	});

	it("deck should be a valid array", (done) => {
		expect(deck).to.not.be.an("undefined");
		expect(deck).to.be.an("array");
		return done();
	});

	it("deck should required length", (done) => {
		expect(deck.length).to.equal(52);
		return done();
	});
});

describe("Deck Model - Shuffle Deck", () => {
	before(() => {
		deck = deckModel.newDeck(52);
		// cloning the array is required for the tests to work correctly
		oldDeck = JSON.parse(JSON.stringify(deck));
		newDeck = deckModel.shuffleDeck(deck);
	});

	it("shuffled deck should be a valid array", (done) => {
		expect(newDeck).to.not.be.an("undefined");
		expect(newDeck).to.be.an("array");
		return done();
	});

	it("shuffled deck should required length", (done) => {
		expect(newDeck.length).to.equal(52);
		return done();
	});

	it("shuffled deck should not be the same as starting deck", (done) => {
		expect(oldDeck).to.not.equal(newDeck);
		return done();
	});
});
