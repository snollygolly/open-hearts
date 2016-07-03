const chance = require("chance").Chance();

class Lobby {
	constructor(creator) {
		this.clients = [];
		this.id = chance.guid();
		this.creator = creator;
	}

	addClient(name) {
		if (this.clients !== null) {
			this.clients.push({
				name: name,
				id: chance.guid()
			});
		}
	}

	removeClient(id) {
		for (let i = 0; i < this.clients.length; i++) {
			if (this.clients[i].id == id) {
				this.clients.splice(i, 1);
			}
		}
	}
}

module.exports = Lobby;