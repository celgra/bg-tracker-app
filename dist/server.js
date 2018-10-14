'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./config/config');


var port = process.env.PORT || 3001;

_app2.default.listen(port, function () {
    console.log('Listening on ' + port);
});