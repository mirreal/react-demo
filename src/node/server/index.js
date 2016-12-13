'use strict'

require('node-jsx').install({
    extension: '.jsx'
})

const React = require('react')
const ReactServer = require('react-dom/server')
const Hello = React.createFactory(require('./Hello.jsx'))

const reactHTML = ReactServer.renderToString(Hello({
    'name': 'Neil'
}))

module.exports = reactHTML
