'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var Result = _mongoose2.default.model('Result', {
    bloodGlucoseLevel: {
        type: Number,
        required: true,
        min: 0
    },
    resultDate: {
        type: Date,
        required: true,
        default: new Date().getTime()
    },
    editedDate: {
        type: Date,
        default: new Date().getTime()
    },
    resultContext: {
        type: String,
        default: 'Other',
        enum: {
            values: ['Fasting', 'Before Breakfast', 'After Breakfast', 'Before Lunch', 'After Lunch', 'Before Dinner', 'After Dinner', 'Bedtime', 'Recheck', 'Other'],
            message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
        }
    },
    user: {
        type: ObjectId,
        required: true
    }
});

exports.default = Result;