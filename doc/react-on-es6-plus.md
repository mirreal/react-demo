
# React on ES6+

> 升级到 ES2015+

```js
presets: [
  'es2015',
  'stage-0'
]
```

## 模块

### 引用

在ES5里，如果使用CommonJS标准，引入React包基本通过require进行，代码类似这样：

```js
// ES5 CommonJS
var React = require('react');
var { Component, PropTypes } = React; // 引用 React 抽象组件

// ES5 AMD
define(['react'], function(React) {
    // ...
})

// ES6
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
```

### 导出单个类

在ES5里，要导出一个类给别的模块用，一般通过module.exports来导出

```js
// ES5
var MyComponent = React.createClass({
    // ...
});
module.exports = MyComponent;
```

如果采用 AMD 规范，可以直接 return

```js
return React.createClass({
    // ...
});
```

在ES6里，通常用export default来实现相同的功能：

```js
// ES6
export default class MyComponent extends Component{
    // ...
}
```

## 定义组件

在ES5里，通常通过React.createClass来定义一个组件类，像这样：

```js
// ES5
var Photo = React.createClass({
    render: function() {
        return (
            <Image source={this.props.source} />
        );
    },
});
```

在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类，像这样：

```js
//ES6
class Photo extends Component {
    render() {
        return (
            <Image source={this.props.source} />
        );
    }
}
```

```js
// The ES5 way
var EmbedModal = React.createClass({
  componentWillMount: function() { … },
});
// The ES6+ way
class EmbedModal extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }
}
```

### 定义组件的属性类型和默认属性

在ES5里，属性类型和默认属性分别通过propTypes成员和getDefaultProps方法来实现

```js
//ES5
var Video = React.createClass({
    getDefaultProps: function() {
        return {
            autoPlay: false,
            maxLoops: 10,
        };
    },
    propTypes: {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        posterFrameSrc: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <View />
        );
    },
});
```

在ES6里，可以统一使用static成员来实现

```js
//ES6
class Video extends React.Component {
    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
    }

    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        posterFrameSrc: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    }

    render() {
        return (
            <View />
        );
    }
}
```

也有人这么写，虽然不推荐，但读到代码的时候你应当能明白它的意思：

```js
//ES6
class Video extends React.Component {
    render() {
        return (
            <View />
        );
    }
}
Video.defaultProps = {
    autoPlay: false,
    maxLoops: 10,
};
Video.propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
};
```

### 初始化STATE

ES5下情况类似，

```js
//ES5
var Video = React.createClass({
    getInitialState: function() {
        return {
            loopsRemaining: this.props.maxLoops,
        };
    },
})
```

ES6下，有两种写法：

```js
//ES6
class Video extends React.Component {
    state = {
        loopsRemaining: this.props.maxLoops,
    }
}
```

不过我们推荐更易理解的在构造函数中初始化（这样你还可以根据需要做一些计算）：

```js
//ES6
class Video extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loopsRemaining: this.props.maxLoops,
        };
    }
}
```

## 函数绑定

```js
class Button extends React.Component {
    render() {
        return <button onclick={this.handleClick}>Click me!</button>
    }

    handleClick() {
        this.logSomething()
    }

    logSomething() {
        console.log('fly')
    }
}
```

在 ES5 下，`React.createClass` 会把所有的方法都 `bind` 一遍，这样可以提交到任意的地方作为回调函数，而 `this` 不会变化。
但官方现在逐步认为这反而是不标准、不易理解的。

createClass生成的组件会把它们的方法自动绑定到组件的this

在 ES6 下，需要手动通过 `bind` 来绑定 `this` 引用，或者使用箭头函数来调用

### 方式一：箭头函数

箭头函数是在ES6中引入的，是一个写匿名函数比较简洁的方式，它不仅仅是包装匿名函数的语法糖，箭头函数没有自己的上下问，它会使用被定义的时候的this作为上下文，我们可以利用这个特性，给onClick绑定一个箭头函数。

```js
class Button extends React.Component {
    render() {
        // Bad Solution: An arrow function!
        return <button onClick={() => this.handleClick()}>Click me!</button>
    }

    handleClick() {
        this.logSomething()
    }

    logSomething() {
        console.log('fly')
    }
}
```

不推荐这种解决方式，因为箭头函数定义在render内部，组件每次重新渲染都会创建一个新的箭头函数，在React中渲染是很快捷的，所以重新渲染会经常发生，这就意味着前面渲染中产生的函数会堆在内存中，强制垃圾回收机制清空它们，这是很花费性能的。

### 方案二：行内绑定

另外一个解决这个问题的方案是，手动把回调绑定到正确的上下文this

```js
class Button extends React.Component {
    render() {
        // Bad Solution: Bind that callback!
        return <button onClick={this.handleClick.bind(this)}>Click me!</button>
    }

    handleClick() {
        this.logSomething()
    }

    logSomething() {
        console.log('fly')
    }
}
```

这个方案和箭头函数有同样的问题，在每次render的时候都会创建一个新的函数

### 方案三：在构造函数中进行绑定

仍然使用 .bind ，现在我们只要绕过每次渲染都要生成新的函数的问题就可以了。我们可以通过只在构造函数中绑定回调的上下问来解决这个问题，因为构造函数只会调用一次，而不是每次渲染都调用。这意味着我们没有生成一堆函数然后让垃圾回收系统清除它们。

```js
class Button extends React.Component {
    constructor() {
        super()
        // Good Solution: Bind it in here!
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return <button onclick={this.handleClick}>Click me!</button>
    }

    handleClick() {
        this.logSomething()
    }

    logSomething() {
        console.log('fly')
    }
}
```

### 方案四：将函数自身替换为箭头函数(ES7 语法)

```js
class Button extends React.Component {
    render() {
        return <button onclick={this.handleClick}>Click me!</button>
    }

    // ES7 syntax
    handleClick = () => {
        this.logSomething()
    }

    logSomething() {
        console.log('fly')
    }
}
```

唯一的警告是，胖箭头函数是一个「实验性」的特性，也就是说并不在官方的 ES6 标准中。但是它受 Babel 支持，只要启用“stage-0” 预置即可。

[stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)

## Mixin



## 资料

https://babeljs.io/blog/2015/06/07/react-on-es6-plus

http://www.w3cplus.com/react/react-es5-createclass-vs-es6-classes.html

https://segmentfault.com/a/1190000006133727

http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8
