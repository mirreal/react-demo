define("hello", ["React", "ReactDOM"], function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
    return (function(modules) { // webpackBootstrap
            // The module cache
            var installedModules = {};

            // The require function
            function __webpack_require__(moduleId) {
                // Check if module is in cache
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                 // Create a new module (and put it into the cache)
                var module = installedModules[moduleId] = {
                    exports: {},
                    id: moduleId,
                    loaded: false
                };
                // Execute the module function
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                // Flag the module as loaded
                module.loaded = true;
                // Return the exports of the module
                return module.exports;
            }

            // expose the modules object (__webpack_modules__)
            __webpack_require__.m = modules;
             // expose the module cache
            __webpack_require__.c = installedModules;
            // __webpack_public_path__
            __webpack_require__.p = "";
            // Load entry module and return exports
            return __webpack_require__(0);
        })
        /************************************************************************/

        ([
            /* 0 */
            /***/
            function(module, exports, __webpack_require__) {

                module.exports = __webpack_require__(1);


                /***/
            },
            /* 1 */
            /***/
            function(module, exports, __webpack_require__) {

                'use strict';

                var _react = __webpack_require__(2);

                var _react2 = _interopRequireDefault(_react);

                var _reactDom = __webpack_require__(3);

                var _reactDom2 = _interopRequireDefault(_reactDom);

                var _hello = __webpack_require__(4);

                var _hello2 = _interopRequireDefault(_hello);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var $container = document.getElementById('container');
                var main = function main(container) {
                    _reactDom2.default.render(_react2.default.createElement(_hello2.default, {
                        name: 'Neil'
                    }), container);
                };

                main($container);

                /***/
            },
            /* 2 */
            /***/
            function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

                /***/
            },
            /* 3 */
            /***/
            function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

                /***/
            },
            /* 4 */
            /***/
            function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function() {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    return function(Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var _react = __webpack_require__(2);

                var _react2 = _interopRequireDefault(_react);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return call && (typeof call === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var Hello = function(_Component) {
                    _inherits(Hello, _Component);

                    function Hello() {
                        _classCallCheck(this, Hello);

                        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
                    }

                    _createClass(Hello, [{
                        key: 'render',
                        value: function render() {
                            return _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Hello ',
                                    this.props.name,
                                    '!'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '\u6211\u662F\u7528 ES6 \u5199\u7684'
                                )
                            );
                        }
                    }]);

                    return Hello;
                }(_react.Component);

                exports.default = Hello;

                /***/
            }

        ])
});;
