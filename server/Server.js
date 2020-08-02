import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

const appName = process.env.APPNAME || 'app';

app.get(`/${appName}/*`, (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Some Error Happend')
        }
        return res.send(data.replace(
            '<div id="root"></div>',
            `<div id="root">${
            ReactDOMServer.renderToString(
                <StaticRouter location={req.url} context={{}}>
                    <App />
                </StaticRouter>
            )}</div>`));
    });
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.info(`Running on ${port}...`);
});