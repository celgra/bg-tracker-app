const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const port = process.env.PORT || 3000;

const { mongoose } = require('./db/mongoose');

const app = express();
const router = routes(app);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});