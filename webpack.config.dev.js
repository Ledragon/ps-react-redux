var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index.tsx'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: __dirname + '/dist'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './src'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        // rules: [
           
        // ],
        loaders: [ { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
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