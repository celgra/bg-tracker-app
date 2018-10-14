'use strict';

var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    var keys = Object.keys(envConfig).forEach(function (key) {
        process.env[key] = envConfig[key];
    });
};