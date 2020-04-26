const { Client } = require('pg');

const databaseConfig = require('../config/database');

const connection = async () => {
    const client = new Client(databaseConfig);

    try {
        await client.connect();

        await client.query(
            `CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                email VARCHAR(100) UNIQUE NOT NULL,
                password_hash VARCHAR(100) NOT NULL
            )`
        );

        return client;
    } catch (err) {
        console.log(err);
        
        return null;
    }
};

module.exports = connection();