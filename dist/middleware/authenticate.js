'use strict';

var _user = require('./../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authenticate = function authenticate(req, res, next) {
    var token = req.header('x-auth');

    _user2.default.findByToken(token).then(function (user) {
        if (!user) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch(function (e) {
        res.status(401).send();
    });
};

module.exports = { authenticate: authenticate };