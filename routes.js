"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const Router = require("koa-router");

const routes = new Router();

const main = require("./controllers/main.js");
const api = require("./controllers/api.js");

// routes

routes.get("/", main.index);
routes.get("/game", main.game);
routes.get("/game/:id", main.game);
routes.get("/console", main.console);

routes.post("/api/game", api.newGame);

app.use(routes.middleware());
