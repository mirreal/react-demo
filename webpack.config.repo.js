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
                    'es2015',
                    'react'
                ]
            }
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
    }
}
