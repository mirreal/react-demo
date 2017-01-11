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
        './src/es6/index.jsx'
    ],
    output: {
        path: __dirname + '/build/',
        publishpath: '',
        filename: 'hello.js',
        library: 'hello',
        libraryTarget: 'var'
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    resolve: {
        alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite'
        }
    }
}
