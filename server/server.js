require('./config/config');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const routes = require('./routes');

const port = process.env.PORT || 3001;

const { mongoose } = require('./db/mongoose');

const app = express();

app.use(
    express.static(path
        .resolve(__dirname, '..', 'client', 'build')
    )
);

app.use(bodyParser.json());

app.use('/api', routes);

app.get('/*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});