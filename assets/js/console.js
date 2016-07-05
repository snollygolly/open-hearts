YUI().use("node", function(Y) {
	var socket = io();
	socket.on('connect', function() {
		// do something here
	});

	socket.on('join', function (data) {
		outputToConsole(data);
	});

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
		}).fail(function(err) {
			// do something with the failure, like laugh at the user
			outputToConsole("Oh no... Something went awry!");
		});
	}

	function joinGame(args) {
		var dataObj = {
			game: args[0],
			name: args[1]
		}
		var dataJSON = JSON.stringify(dataObj, 2, null);
		socket.emit('join', dataJSON);
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
