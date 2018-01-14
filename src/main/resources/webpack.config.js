var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'static/client/public');
var APP_DIR = path.resolve(__dirname, 'static/client/app');

var config = {
    entry: {
        'admin': APP_DIR + '/admin/index.jsx',
        'user':  APP_DIR + '/user/index.jsx',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    }
};

module.exports = config;