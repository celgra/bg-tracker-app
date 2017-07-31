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
        default: 'Other',
        enum: {
            values: ['Fasting','Before Breakfast', 'After Breakfast', 'Before Lunch', 
                'After Lunch','Before Dinner', 'After Dinner', 'Bedtime', 'Recheck', 
                'Other'],
            message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
        }
    },
    user: {
        type: ObjectId,
        required: true
    }
});

module.exports = { Result }