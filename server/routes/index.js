const routes = require('express').Router();
const results = require('./result');
const users = require('./user');

routes.use('/results', results);
routes.use('/users', users);

module.exports = routes;