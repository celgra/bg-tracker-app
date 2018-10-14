'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var ContextSchema = new _mongoose2.default.Schema({ name: String });

var Contexts = new _mongoose2.default.Schema({
    resultContexts: [ContextSchema]
});

exports.default = Contexts;