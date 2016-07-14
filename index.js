"use strict";

const config = require("./config.json");

const koa = require("koa");
const hbs = require("koa-hbs");
const serve = require("koa-static-folder");

const bodyParser = require("koa-bodyparser");

const app = koa();

// socket stuff
const KoaSocket = require("koa-socket");
const io = new KoaSocket();

io.attach(app);

exports.app = app;

// for all socket interations
require("./controllers/sockets");

// misc handlebars helpers
require("./helpers/handlebars");

// trust proxy
app.proxy = true;

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
		if (this.state.api === true) {
			// if this was an API request, send the error back in a plain response
			this.app.emit("error", err, this);
			this.body = {error: true, message: String(err)};
		} else {
			// this wasn"t an API request, show the error page
			this.app.emit("error", err, this);
			yield this.render("error", {
				dump: err
			});
		}
	}
});

require("./routes");

console.log(`${config.site.name} is now listening on port ${config.site.port}`);
app.listen(config.site.port);

process.on("SIGINT", function exit() {
	process.exit();
});
