const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const userMiddleware = require('./app/middlewares/usersMiddleware');

const routes = new Router();

routes.get('/users', UserController.show);

routes.post('/users',
  userMiddleware.checkEmail,
  userMiddleware.checkPassword,
  UserController.store);

routes.put('/users',
  userMiddleware.checkEmail,
  userMiddleware.checkPassword,
  userMiddleware.checkNewPassword,
  UserController.update);

routes.delete('/users',
  userMiddleware.checkEmail,
  UserController.delete);

module.exports = routes;
