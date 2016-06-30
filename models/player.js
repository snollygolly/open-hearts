"use strict";

module.exports = {
	newPlayer: (name) => {
		return {
			// TODO: add an actual id
			id: 0,
			name: name,
			// TODO: generate a hand based off newHand in the hand model
			hand: [],
			tricks: []
		};
	}
};
