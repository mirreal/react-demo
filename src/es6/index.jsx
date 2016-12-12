
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello.jsx'

const $container = document.getElementById('container')
const main = container => {
    ReactDOM.render(
        <Hello name="Neil"/>, container
    )
}

main($container)
