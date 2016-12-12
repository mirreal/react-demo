import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <p>我是用 ES6 写的</p>
            </div>
        )
    }
}
