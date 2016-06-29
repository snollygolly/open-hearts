"use strict";

const config = require("../config.json");

module.exports.index = function* index() {
	yield this.render("index", {
		title: config.site.name
	});
};
