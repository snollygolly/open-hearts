"use strict";

const config = require("./config.json");

const koa = require("koa");
const hbs = require("koa-hbs");
const serve = require("koa-static-folder");

const session = require("koa-generic-session");
const bodyParser = require("koa-bodyparser");

const app = koa();

exports.app = app;

// misc handlebars helpers
require("./helpers/handlebars");

// trust proxy
app.proxy = true;

// sessions
app.keys = [config.site.secret];
app.use(session());

// body parser
app.use(bodyParser());

// statically serve assets
app.use(serve("./assets"));

// load up the handlebars middlewear
app.use(hbs.middleware({
	viewPath: `${__dirname}/views`,
	layoutsPath: `${__dirname}/views/layouts`,
	partialsPath: `${__dirname}/views/partials`,
	defaultLayout: "main"
}));

app.use(function* error(next) {
	try {
		yield next;
	} catch (err) {
		this.status = err.status || 500;
		this.body = err.message;
		this.app.emit("error", err, this);
	}
});

require("./routes");

// Attach
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);
const lobby = require('./models/lobby.js');

let lobbies = [];

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('create-lobby', function (event) {
  	console.log("Attempting to create lobby");

  	if (event !== null) {
  		let newLobby = new lobby(event.user);

  		lobbies.push(newLobby);
  	}
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

console.log(`${config.site.name} is now listening on port ${config.site.port}`);
server.listen(config.site.port);

process.on("SIGINT", function exit() {
	process.exit();
});
