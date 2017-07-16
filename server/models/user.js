const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {

    },
    password: {

    }
});

module.exports = { User };