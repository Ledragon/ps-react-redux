var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: __dirname + '/dist'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        // rules: [

        // ],
        loaders: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    }
    // ,
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
}