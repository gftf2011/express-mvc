const database = require('../database');

const UserController = require('./controllers/UserController');

const express = require('express');

const server = express();

server.use(express.json());

server.get('/users', (req, res) => {
    UserController.show(req, res);
});

server.post('/users', (req, res) => {
    UserController.store(req, res);
});

server.put('/users', (req, res) => {
    UserController.update(req, res);
});

server.delete('/users', (req, res) => {
    UserController.delete(req, res);
});

server.listen(8001);
