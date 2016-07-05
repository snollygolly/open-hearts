"use strict";

const config = require("../config.json");

module.exports.index = function* index() {
	yield this.render("index", {
		title: config.site.name,
		script: "index"
	});
};

module.exports.console = function* console() {
	yield this.render("console", {
		title: config.site.name,
		script: "console"
	});
};

module.exports.game = function* game() {
	if (this.params.id !== null) {
		// Check DB to see if lobby exists
		if (true) {
			// If Lobby exists, load game-board
			yield this.render("game", {
				title: config.site.name,
				script: "scripts.min"
			});
		} else {
			// If lobby does not exist, load index
			yield this.redirect("/");
		}
	} else {
		// If no id param, just load it anyways (for development)
		// Normally this would redirect to index
		yield this.render("game", {
			title: config.site.name,
			script: "scripts.min"
		});
	}
};
