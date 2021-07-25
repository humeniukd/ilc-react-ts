const express = require('express');
const cors = require('cors');

const {default: IlcSdk} = require('ilc-sdk');
const {default: IlcAppSdk} = require('ilc-sdk/app');
const ReactDOMServer = require('react-dom/server');
const {default: App} = require('./build/server');

const PORT = process.env.PORT || 5000;

const ilcSdk = new IlcSdk();
const server = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');

    server.use(
        webpackMiddleware(webpack(require('./webpack.dev')), {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            logLevel: 'debug',
        })
    );
} else {
    server.use(cors());
    server.use(express.static('build'));
}

server.get('/fragment', async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const ilcReqData = ilcSdk.processRequest(req);
    const appSdk = new IlcAppSdk(ilcReqData);

    const location = new URL(`http://${ilcReqData.getCurrentReqHost}/${ilcReqData.getCurrentReqOriginalUri()}`);

    const html = ReactDOMServer.renderToString(App(appSdk, location));

    res.send(`<div class="app-container">${html}</div>`);
});

server.listen(PORT, () => {
    console.log(`MgnlApp server started at port ${PORT}`);
});
