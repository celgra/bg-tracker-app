'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _authenticate = require('./../middleware/authenticate');

var _mongodb = require('mongodb');

var _result = require('./../models/result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _authenticate.authenticate, function (req, res) {
    _result2.default.find({ user: req.user.id }).then(function (results) {
        res.send({ results: results });
    }, function (e) {
        res.status(400).send(e);
    });
});

router.post('/', _authenticate.authenticate, function (req, res) {
    var body = _lodash2.default.pick(req.body, ['bloodGlucoseLevel', 'resultDate', 'resultContext']);

    var result = new _result2.default({
        bloodGlucoseLevel: body.bloodGlucoseLevel,
        resultDate: body.resultDate,
        resultContext: body.resultContext,
        user: req.user.id
    });

    result.save().then(function (result) {
        res.status(201).send({ result: result });
    }, function (e) {
        res.status(400).send(e);
    });
});

router.get('/:month/:year/', _authenticate.authenticate, function (req, res) {
    var _req$params = req.params,
        month = _req$params.month,
        year = _req$params.year;

    var startDate = new Date(year, month - 1);
    var endDate = new Date(year, month);

    _result2.default.find({ resultDate: {
            "$gte": startDate,
            "$lt": endDate
        },
        user: req.user.id
    }).then(function (results) {
        res.send({ results: results });
    }, function (e) {
        res.status(404).send();
    });
});

exports.default = router;