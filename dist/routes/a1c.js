'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _authenticate = require('./../middleware/authenticate');

var _mongodb = require('mongodb');

var _result = require('./../models/result');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _authenticate.authenticate, function (req, res) {
    var startDate = (0, _moment2.default)().subtract(90, 'days').format('x');

    _result.Result.find({ resultDate: {
            "$gte": startDate
        },
        user: req.user.id
    }).then(function (results) {
        var averageBloodGlucose = results.length > 0 ? results.reduce(function (acc, val) {
            return acc + val.bloodGlucoseLevel;
        }, 0) / results.length : 0;

        res.send({
            a1c: ((46.7 + averageBloodGlucose) / 28.7).toFixed(2),
            resultCount: results.length,
            averageBloodGlucose: averageBloodGlucose.toFixed(0)
        });
    });
});

exports.default = router;