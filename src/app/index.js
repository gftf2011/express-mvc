const express = require('express');
const database = require('../database');

const userMiddleware = require('./middlewares/usersMiddleware');

const UserController = require('./controllers/UserController');

const server = express();

server.use(express.json());

server.get('/users', UserController.show);

server.post('/users',
  userMiddleware.checkEmail,
  userMiddleware.checkPassword,
  UserController.store);

server.put('/users',
  userMiddleware.checkEmail,
  userMiddleware.checkPassword,
  userMiddleware.checkNewPassword,
  UserController.update);

server.delete('/users',
  userMiddleware.checkEmail,
  UserController.delete);

server.listen(8001);
