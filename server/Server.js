import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';
import Axios from 'axios';

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

app.get('api', (req, res) => {
    const query = req.query;
    const uri = "https://hn.algolia.com/api/v1/search" + query
    console.log('uri call::', uri);
    Axios.get(uri).then(response => {
        res.send(response);
    })
})

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.info(`Running on ${port}...`);
});