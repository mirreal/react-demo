import React from 'react'
import ReactDOM from 'react-dom'
import Promise from 'es6-promise'
import $ from 'zepto-modules'
import RepoList from './RepoList'

let request = new Promise((resolve) => {
    $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars', res => {
        resolve(res)
    })
})

ReactDOM.render(
    <RepoList promise={request} />, document.getElementById('container')
)
