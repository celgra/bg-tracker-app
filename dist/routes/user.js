'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _user = require('./../models/user');

var _user2 = _interopRequireDefault(_user);

var _authenticate = require('./../middleware/authenticate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/', function (req, res) {
    console.log('posting user');
    var body = _lodash2.default.pick(req.body, ['email', 'password']);
    var user = new _user2.default(body);

    user.save().then(function (user) {
        return user.generateAuthToken();
    }).then(function (token) {
        debugger;
        res.header('x-auth', token).send(user);
    }).catch(function (e) {
        debugger;
        res.status(400).send(e);
    });
});

router.get('/me', _authenticate.authenticate, function (req, res) {
    res.send(req.user);
});

router.post('/login', function (req, res) {
    var body = _lodash2.default.pick(req.body, ['email', 'password']);

    _user2.default.findByCredentials(body.email, body.password).then(function (user) {
        user.generateAuthToken().then(function (token) {
            res.header('x-auth', token).send(user);
        });
    }).catch(function (e) {
        res.status(400).send(e);
    });
});

router.delete('/me/token', _authenticate.authenticate, function (req, res) {
    req.user.removeToken(req.token).then(function () {
        res.status(200).send();
    }, function () {
        res.status(400).send();
    });
});

exports.default = router;