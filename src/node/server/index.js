'use strict'

// 让 node 认识 jsx
require('node-jsx').install({
    extension: '.jsx'
})

const React = require('react')
const ReactServer = require('react-dom/server')
const Hello = React.createFactory(require('./Hello.jsx'))

// 组件接受数据
const reactHTML = ReactServer.renderToString(Hello({
    'name': 'Neil'
}))

module.exports = reactHTML
