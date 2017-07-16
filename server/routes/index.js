const routes = require('express').Router();
const results = require('./result');

routes.use('/results', results);

module.exports = routes;