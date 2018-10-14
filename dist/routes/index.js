'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

var _a1c = require('./a1c');

var _a1c2 = _interopRequireDefault(_a1c);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.use('/results', _result2.default);
routes.use('/a1c', _a1c2.default);
routes.use('/users', _user2.default);

exports.default = routes;