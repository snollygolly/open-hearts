const Promise = require("bluebird");
const cradle	= Promise.promisifyAll(require("cradle"));
const Chance = require("chance");
const chance = new Chance();

// A custom Error just for database problems.
function CouchDBError(message) {
	this.name = "CouchDBError";
	this.message = (message || "");
}
CouchDBError.prototype = Error.prototype;

// Connects to a database and returns the DB object.
const connectToDatabase = (dbName) => {
	try {
		return new(cradle.Connection)().database(dbName);
	} catch (err) {
		throw new CouchDBError(`DB: Get: Connection to database [${dbName}] failed`);
	}
};

exports.createGame = Promise.coroutine(function* co(gameDoc) {
	try {
		gameDoc = yield exports.saveGame(gameDoc, "games");
	}
	catch (err) {
		console.log(err);

		return {
			success: false,
			data: err
		};
	}

	return {
		success: true,
		data: gameDoc
	};
});

// Grabs a document from a database in CouchDB.
exports.getGame = Promise.coroutine(function* co(id, dbName) {
	try {
		const db = connectToDatabase(dbName);
		const doc = yield db.getAsync(id);
		return doc;
	} catch (err) {
		if (err.name === "CouchDBError") {
			throw err;
		}
		throw new CouchDBError(`DB: Get: Get of [${id}] failed`);
	}
});

// Saves a document in a database in CouchDB.
exports.saveGame = Promise.coroutine(function* co(gameDoc, dbName) {
	try {
		const db = connectToDatabase(dbName);
		const returnVal = yield db.saveAsync(gameDoc.id, gameDoc);

		gameDoc.id = returnVal.id;

		return gameDoc;
	} catch (err) {
		if (err.name === "CouchDBError") {
			throw err;
		}

		throw new CouchDBError(`DB: Save: Save of [${id}] failed`);
	}
});

// Removes a document in a database in CouchDB.
exports.removeGame = Promise.coroutine(function* co(id, dbName) {
	try {
		const db = connectToDatabase(dbName);
		const returnVal = yield db.removeAsync(id);
		return id;
	} catch (err) {
		if (err.name === "CouchDBError") {
			throw err;
		}
		throw new CouchDBError(`DB: Remove: Removal of [${id}] failed`);
	}
});
