const results = require('./readings');

module.exports = (app) => {
    app.use('/results', results);
}