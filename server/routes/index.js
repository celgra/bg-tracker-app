const routes = require('express').Router();
const results = require('./result');
const a1c = require('./a1c');
const users = require('./user');

routes.use('/results', results);
routes.use('/a1c', a1c);
routes.use('/users', users);

module.exports = routes;