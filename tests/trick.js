"use strict";

const expect = require("chai").expect;

const trickModel = require("../models/trick");

let trick;
let winner;

describe("Trick Model - Determine Winner [Simple Numbers]", () => {
	before(() => {
		trick = [
			{
				id: "LOSER1",
				card: "9H"
			},
			{
				id: "LOSER2",
				card: "6H"
			},
			{
				id: "WINNER",
				card: "10H"
			},
			{
				id: "LOSER3",
				card: "8H"
			}
		];
		winner = trickModel.determineWinner(trick);
	});

	it("winner should be a player ID string", (done) => {
		expect(winner).to.be.a("string");
		return done();
	});

	it("winner should be correct", (done) => {
		expect(winner).to.equal("WINNER");
		return done();
	});
});

describe("Trick Model - Determine Winner [Complex Numbers]", () => {
	before(() => {
		trick = [
			{
				id: "LOSER1",
				card: "9H"
			},
			{
				id: "WINNER",
				card: "KH"
			},
			{
				id: "LOSER2",
				card: "10H"
			},
			{
				id: "LOSER3",
				card: "JH"
			}
		];
		winner = trickModel.determineWinner(trick);
	});

	it("winner should be a player ID string", (done) => {
		expect(winner).to.be.a("string");
		return done();
	});

	it("winner should be correct", (done) => {
		expect(winner).to.equal("WINNER");
		return done();
	});
});

describe("Trick Model - Determine Winner [Slight Mixed Cards]", () => {
	before(() => {
		trick = [
			{
				id: "LOSER1",
				card: "9H"
			},
			{
				id: "LOSER2",
				card: "KS"
			},
			{
				id: "LOSER3",
				card: "10H"
			},
			{
				id: "WINNER",
				card: "JH"
			}
		];
		winner = trickModel.determineWinner(trick);
	});

	it("winner should be a player ID string", (done) => {
		expect(winner).to.be.a("string");
		return done();
	});

	it("winner should be correct", (done) => {
		expect(winner).to.equal("WINNER");
		return done();
	});
});

describe("Trick Model - Determine Winner [Heavy Mixed Cards]", () => {
	before(() => {
		trick = [
			{
				id: "WINNER",
				card: "2H"
			},
			{
				id: "LOSER1",
				card: "KS"
			},
			{
				id: "LOSER2",
				card: "10D"
			},
			{
				id: "LOSER3",
				card: "JC"
			}
		];
		winner = trickModel.determineWinner(trick);
	});

	it("winner should be a player ID string", (done) => {
		expect(winner).to.be.a("string");
		return done();
	});

	it("winner should be correct", (done) => {
		expect(winner).to.equal("WINNER");
		return done();
	});
});
