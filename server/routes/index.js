const readings = require('./readings');

module.exports = (app) => {
    app.use('/readings', readings);
}