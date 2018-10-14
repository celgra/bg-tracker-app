import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';

import routes from './routes';

import mongoose from './db/mongoose';

const app = express();

app.use(
    express.static(path
        .resolve(__dirname, '..', 'client', 'build')
    )
);

app.use(compression());

app.use(bodyParser.json());

app.use('/api', routes);

app.get('/*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
});

export default app;