/* eslint-env node */
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/server.tsx'),
    target: 'node',
    node: false,
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader: 'ts-loader',
        }, {
            test: /\.(png|jpe?g|gif|css|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }],
    },
    resolve: {
        extensions: [ '.tsx', '.ts' ],
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    plugins: [],
    devtool: 'source-map'
};


