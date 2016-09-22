const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-source-map',
    context: path.join(__dirname, './app'),
    entry: {
        'bundle.js': './index.jsx'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' }
        ])
    ]
};
