# a react demo

> Are u kidding me

## 两种风格

ES5 和 ES2015

ES5

```js
var React = require('react')

var Hello = React.createClass({
    render: function() {
        return (
            <h1>Hello {this.props.name}!</h1>
        )
    }
})
```

ES6

```js
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

module.exports = Hello
```

## 导出 CSS 文件

ExtractTextPlugin

引入插件

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
```

在 loader 中加入插件

```js
{
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
}
```

添加插件实例

```js
plugins: [
    new ExtractTextPlugin('repo.css')
]
```

## CSS Modules

### react-css-modules

用法

```js
import CSSModules from 'react-css-modules'
import styles from './style.css'

class RepoList extends Component {
    // ...
    render() {
        // ...
        return (
            <ol styleName='repo-list'>{repoList}</ol>    
        )
    }
}

export default CSSModules(RepoList, styles)
```

用 `styleName` 代替 `className`，再也不用写 styles.xxx

### Source map

## webpack

* loader 从右向左加载

```js
loader: 'style!css!postcss'
```

使用 `?` 号配置，比如 css module

```js
loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
```

* resolve 定义可以被 import 的文件后缀

```js
resolve: {
    extensions: ['', '.js', '.jsx']
}
```

## 内联样式

##  React 服务器端渲染

引入的是 `react-dom/server`

调用 renderToString 方法，类似于使用模板引擎的功能

似乎也没有什么

## postcss

```js
postcss: function() {
    return [require('postcss-cssnext')];
}
```

cssnext 包含 autoprefixer

语法 example：

```css
:root {
    --borderColor: #900;
    --borderRadius: 6px;
}

.repo-list {
    padding: 10px;
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
}
```

## JSCS

### validateLineBreaks

* LF
* CRLF

## git
