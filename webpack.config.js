const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, './app'),
    entry: {
        'bundle.js': './index.jsx'
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.js$/, loader: "source-map-loader" },
            {test: /\.scss$/, loader: 'style!css!postcss!sass'},
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' }
        ])
    ]
};
