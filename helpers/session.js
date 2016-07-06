const co = require("co");
const Promise = require("bluebird");
const redis = require("redis");
Promise.promisifyAll(redis.RedisClient.prototype);
const client = redis.createClient();

exports.getValue = function* getValue(key) {
	const result = yield client.getAsync(key);
	if (result === null) {
		return false;
	}
	return result;
};

exports.setValue = (key, value) => {
	client.set(key, value);
};

exports.deleteValue = (key) => {
	client.del(key);
};

client.on("error", (err) => {
	console.log(`Error: ${err}`);
});
