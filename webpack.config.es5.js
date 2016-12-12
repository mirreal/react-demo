/**
 * Created by yran on 2016/12/07.
 */

module.exports = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'react'
                ]
            }
        }]
    },
    entry: [
        './src/es5/index.jsx'
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'hello.js',
        library: 'hello',
        libraryTarget: 'var'
    }
}
