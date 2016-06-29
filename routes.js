"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const Router = require("koa-router");

const routes = new Router();

const main = require("./controllers/main.js");

// routes

routes.get("/", main.index);

app.use(routes.middleware());
