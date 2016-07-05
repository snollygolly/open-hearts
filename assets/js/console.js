YUI().use("node", function(Y) {
	var lastCommand;
	var lastGameId;
	var gamePlayers = [];
	var dataObj;
	var fetchState = false;

	var socket = io();
	socket.on('connect', function() {
		// do something here
	});

	socket.on('join', function (data) {
			const payload = JSON.parse(data);
			outputToConsole("Joined Game : " + JSON.stringify(payload._id));
			outputToConsole(" <br> ");
			for (let i = 0; i < payload.players.length; i++) {
				outputToConsole("Player" + (i+1));
				outputToConsole(JSON.stringify(payload.players[i]));
				outputToConsole(" <br> ");
			}
	});

	socket.on('fetch', function (data) {
		var info = data;
		if(fetchState == true) {
			var payload = JSON.parse(info);
			info = "Game state : " + payload.state;
		}
		outputToConsole(info);
		outputToConsole(" <br> ");
	});

	var COMMANDS = [
		{
			name: "startGame",
			handler: startGame
		},

		{
			name: "joinGame",
			handler: joinGame
		},

		{
			name: "clear",
			handler: clear
		},

		{
			name: "help",
			handler: help
		},

		{
			name: "fetch",
			handler: fetch
		},

		{
			name: "getState",
			handler: getState
		},
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
		var info = args;
		if (args.length == 0) {
			info = 4;
		}
		outputToConsole("Starting Game...");
		outputToConsole(" <br> ");
		var players = info;
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: "/api/game", // A valid URL
			data: {players: players}
		}).done(function(result) {
			if (result.error === true) {
				outputToConsole(result.message);
				outputToConsole(" <br> ");
			}
			// do something with the success, like show a link
			outputToConsole("Game Created!");
			outputToConsole(JSON.stringify(result));
			outputToConsole(" <br> ");
			lastGameId = result.id;
		}).fail(function(err) {
			// do something with the failure, like laugh at the user
			outputToConsole("Oh no... Something went awry!");
			outputToConsole(" <br> ");
		});
	}

	function joinGame(args) {
		dataObj = {
			game: args[0],
			name: args[1]
	}
		if (args.length == 1) {
			dataObj = {
				game: lastGameId,
				name: args[0]
			}
		}
		var dataJSON = JSON.stringify(dataObj, 2, null);
		socket.emit('join', dataJSON);
		outputToConsole("Joining requested game as : " + JSON.stringify(dataObj.name))
		outputToConsole(" <br> ");
	}

	function clear() {
		$("#out").empty();
	}

	function fetch(args) {
		fetchState = false;
		var info = args;
		if (args.length == 0){
			info = lastGameId;
		}
		socket.emit('fetch', info);
	}

	function getState(args) {
		fetchState = true;
		var info = args;
		if (args.length == 0){
			info = lastGameId;
		}
		socket.emit('fetch', info);
	}

	function help() {
		outputToConsole("startGame : starts a game with 4 players.");
		outputToConsole(" <br> ");
		outputToConsole("startGame @val : starts a game with @val number of players.");
		outputToConsole(" <br> ");
		outputToConsole("joinGame @val1 : joins the last created game and sets username to @val1");
		outputToConsole(" <br> ");
		outputToConsole("joinGame @val1 @val2 : joins a game with id of @val1 and sets user name to @val2");
		outputToConsole(" <br> ");
		outputToConsole("fetch : gets the information of the last made game");
		outputToConsole(" <br> ");
		outputToConsole("fetch @val1 : gets the information for game with id of @val1");
		outputToConsole(" <br> ");
		outputToConsole("getState : gets the state of the last made game");
		outputToConsole(" <br> ");
		outputToConsole("getState @val1 : gets the state for game with id of @val1");
		outputToConsole(" <br> ");
		outputToConsole("clear : clears everything in the console screen");
		outputToConsole(" <br> ");
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
				lastCommand = $("#in").val();
				processCommand();
			}
			else if (e.charCode === 38) {
				$("#in").val(lastCommand);
			}
		});
	});
});
