const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    let config = require('./config.json');
    let envConfig = config[env];

    let keys = Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
};