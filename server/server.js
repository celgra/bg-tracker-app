require('./config/config');
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import routes from './routes';

const port = process.env.PORT || 3001;

import mongoose from './db/mongoose';

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