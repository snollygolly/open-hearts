"use strict";

const config = require("../config.json");

module.exports.index = function* index() {
	yield this.render("index", {
		title: config.site.name
	});
};

module.exports.game = function* game() {
	yield this.render("game", {
		title: config.site.name
	});
};
