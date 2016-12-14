/**
 * Created by yran on 2016/12/07.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }, {
            test: /\.less$/,
            // loader: 'style!css!less'
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            // loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!less'
            loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[name]__[local]___[hash:base64:5]!less')
        }, {
            test: /\.css$/,
            // loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
            loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
            // loader: ExtractTextPlugin.extract({
            //     fallbackLoader: 'style-loader',
            //     loader: 'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            // })
        }]
    },
    entry: [
        './src/repo/index.jsx'
    ],
    output: {
        path: __dirname + '/build/',
        publishpath: '',
        filename: 'repo.js',
        library: 'repo',
        libraryTarget: 'var'
    },
    plugins: [
        new ExtractTextPlugin('repo.css')
    ],
    postcss: function() {
        return [require('postcss-cssnext')];
    }
}
