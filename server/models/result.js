const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Result = mongoose.model('Result', {
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
        default: null
    },
    user: {
        type: ObjectId,
        required: true
    }
});

module.exports = { Result }