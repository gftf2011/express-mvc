const User = require('../app/models/User');

const connection = require('../connection');

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        models.map(model => model.init(connection));
    }
}

module.exports = new Database();