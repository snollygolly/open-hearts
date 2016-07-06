"use strict";

const expect = require("chai").expect;

const trickModel = require("../models/trick");

let trick;
let winner;
let score;

describe("Trick Model - Determine Winner [Simple Numbers]", () => {
	before(() => {
		trick = [
			{
				id: "LOSER1",
				card: "9H"
			},
			{
				id: "LOSER2",
				card: "10S"
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

describe("Trick Model - Score Trick [Single Heart]", () => {
	before(() => {
		trick = [
			{
				id: "A",
				card: "9H"
			},
			{
				id: "B",
				card: "6C"
			},
			{
				id: "C",
				card: "10C"
			},
			{
				id: "D",
				card: "8D"
			}
		];
		score = trickModel.scoreTrick(trick);
	});

	it("score should be a valid number", (done) => {
		expect(score).to.be.a("number");
		expect(score).to.be.at.least(0);
		return done();
	});

	it("score should be correct", (done) => {
		expect(score).to.equal(1);
		return done();
	});
});

describe("Trick Model - Score Trick [Mostly Hearts]", () => {
	before(() => {
		trick = [
			{
				id: "A",
				card: "9H"
			},
			{
				id: "B",
				card: "6H"
			},
			{
				id: "C",
				card: "10C"
			},
			{
				id: "D",
				card: "8H"
			}
		];
		score = trickModel.scoreTrick(trick);
	});

	it("score should be a valid number", (done) => {
		expect(score).to.be.a("number");
		expect(score).to.be.at.least(0);
		return done();
	});

	it("score should be correct", (done) => {
		expect(score).to.equal(3);
		return done();
	});
});

describe("Trick Model - Score Trick [Queen Only]", () => {
	before(() => {
		trick = [
			{
				id: "A",
				card: "9C"
			},
			{
				id: "B",
				card: "6C"
			},
			{
				id: "C",
				card: "QS"
			},
			{
				id: "D",
				card: "8C"
			}
		];
		score = trickModel.scoreTrick(trick);
	});

	it("score should be a valid number", (done) => {
		expect(score).to.be.a("number");
		expect(score).to.be.at.least(0);
		return done();
	});

	it("score should be correct", (done) => {
		expect(score).to.equal(13);
		return done();
	});
});

describe("Trick Model - Score Trick [Mixed]", () => {
	before(() => {
		trick = [
			{
				id: "A",
				card: "9H"
			},
			{
				id: "B",
				card: "6H"
			},
			{
				id: "C",
				card: "QS"
			},
			{
				id: "D",
				card: "8H"
			}
		];
		score = trickModel.scoreTrick(trick);
	});

	it("score should be a valid number", (done) => {
		expect(score).to.be.a("number");
		expect(score).to.be.at.least(0);
		return done();
	});

	it("score should be correct", (done) => {
		expect(score).to.equal(16);
		return done();
	});
});
