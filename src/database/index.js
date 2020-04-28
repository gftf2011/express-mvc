const { Client } = require('pg');

const User = require('../app/models/User');

const databaseConfig = require('../config/database');

const connection = async () => {
  const client = new Client(databaseConfig);

  try {
    await client.connect();

    return client;
  } catch (err) {
    console.error(err);

    return null;
  }
};

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const connect = connection();

    models.map((model) => model.init(connect));
  }
}

module.exports = new Database();
