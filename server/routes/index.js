const results = require('./result');

module.exports = (app) => {
    app.use('/results', results);
}