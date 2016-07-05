var YUI = require("http://yui.yahooapis.com/combo?3.5.0/build/yui/yui-min.js");
var socket = require("../../controllers/sockets");

$("#in").submit() {
YUI().use("node", function(Y) {
			var gameObj;
			var COMMANDS = [
				{
					name: "startGame",
					handler: startGame
				},

				{
					name: "joinGame",
					handler: joinGame
				}
			];

			function processCommand() {
				var inField = Y.one("#in");
				var input = inField.get("value");
				var parts = input.replace(/\s+/g, " ").split(" ");
				var command = parts[0];
				var args = parts.length > 1 ? parts.slice(1, parts.length) : [];

				inField.set("value", "");

				for (var i = 0; i < COMMANDS.length; i++) {
					if (command === COMMANDS[i].name) {
						COMMANDS[i].handler(args);
						return;
					}
				}

				outputToConsole("Unsupported Command: " + command);
			}

			function startGame(args) {
				outputToConsole("Starting Game...");
						var players = args;
						$.ajax({
							type: 'POST',
							dataType: 'json',
							url: "/api/game", // A valid URL
							data: {players: players}
						}).done(function(result) {
							if (result.error === true) {
								outputToConsole(result.message);
							}
							// do something with the success, like show a link
							outputToConsole("Game Created!");
							outputToConsole(JSON.stringify(result));
							gameObj = result;
						}).fail(function(err) {
							// do something with the failure, like laugh at the user
							outputToConsole("Oh no... Something went awry!");
						});
					}

				function joinGame(arg1, arg2) {

						var socket = io.connect('http://localhost:2999');
						socket.on('connect', function() {
							socket.emit(arg1, arg2, function(data){
								outputToConsole(data);
							});
						});

				}

				function outputToConsole(text) {
					var p = Y.Node.create("<p>" + text + "</p>");
					Y.one("#out").append(p);
					p.scrollIntoView();
				}

				Y.on("domready", function(e) {
					Y.one("body").setStyle("paddingBottom", Y.one("#in").get("offsetHeight"));
					Y.one("#in").on("keydown", function(e) {
						if (e.charCode === 13) {
							processCommand();
						}
					});
				});
			});
}
