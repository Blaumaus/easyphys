'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _process = require('./process');

var _process2 = _interopRequireDefault(_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global document */


var NodeWithMathJax = function (_React$Component) {
    _inherits(NodeWithMathJax, _React$Component);

    function NodeWithMathJax() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NodeWithMathJax);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeWithMathJax.__proto__ || Object.getPrototypeOf(NodeWithMathJax)).call.apply(_ref, [this].concat(args))), _this), _this.container = React.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NodeWithMathJax, [{
        key: 'componentDidMount',


        /*
         * Render the math once the node is mounted
         */
        value: function componentDidMount() {
            this.typeset();
        }

        /*
         * Update the jax, force update if the display mode changed.
         */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var forceUpdate = prevProps.inline != this.props.inline;
            this.typeset(forceUpdate);
        }

        /*
         * Clear the math when unmounting the node
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clear();
        }
    }, {
        key: 'clear',


        /*
         * Clear the jax
         */
        value: function clear() {
            var MathJax = this.props.MathJax;


            if (!this.script || !MathJax) {
                return;
            }

            var jax = MathJax.Hub.getJaxFor(this.script);
            if (jax) {
                jax.Remove();
            }
        }

        /*
         * Update math in the node.
         */

    }, {
        key: 'typeset',
        value: function typeset(forceUpdate) {
            var _this2 = this;

            var _props = this.props,
                MathJax = _props.MathJax,
                formula = _props.formula,
                onRender = _props.onRender;


            if (!MathJax) {
                return;
            }

            if (forceUpdate) {
                this.clear();
            }

            if (!forceUpdate && this.script) {
                MathJax.Hub.Queue(function () {
                    var jax = MathJax.Hub.getJaxFor(_this2.script);

                    if (jax) jax.Text(formula, onRender);else {
                        var script = _this2.setScriptText(formula);
                        (0, _process2.default)(MathJax, script, onRender);
                    }
                });
            } else {
                var script = this.setScriptText(formula);
                (0, _process2.default)(MathJax, script, onRender);
            }
        }

        /*
         * Create a script.
         */

    }, {
        key: 'setScriptText',
        value: function setScriptText(text) {
            var inline = this.props.inline;


            if (!this.script) {
                this.script = document.createElement('script');
                this.script.type = 'math/tex; ' + (inline ? '' : 'mode=display');
                this.container.current.appendChild(this.script);
            }

            if ('text' in this.script) {
                // IE8, etc
                this.script.text = text;
            } else {
                this.script.textContent = text;
            }

            return this.script;
        }
    }, {
        key: 'render',
        value: function render() {
            // eslint-disable-next-line no-unused-vars
            var _props2 = this.props,
                MathJax = _props2.MathJax,
                formula = _props2.formula,
                inline = _props2.inline,
                onRender = _props2.onRender,
                rest = _objectWithoutProperties(_props2, ['MathJax', 'formula', 'inline', 'onRender']);

            if (this.props.inline) {
                return React.createElement('span', _extends({ ref: this.container }, rest));
            }

            return React.createElement('span', _extends({ ref: this.container }, rest));
        }
    }]);

    return NodeWithMathJax;
}(React.Component);

NodeWithMathJax.defaultProps = {
    inline: true,
    onRender: function onRender() {}
};

var MathJaxNode = function (_React$PureComponent) {
    _inherits(MathJaxNode, _React$PureComponent);

    function MathJaxNode() {
        _classCallCheck(this, MathJaxNode);

        return _possibleConstructorReturn(this, (MathJaxNode.__proto__ || Object.getPrototypeOf(MathJaxNode)).apply(this, arguments));
    }

    _createClass(MathJaxNode, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                _context2.default.Consumer,
                null,
                function (_ref2) {
                    var MathJax = _ref2.MathJax,
                        registerNode = _ref2.registerNode;

                    registerNode();

                    if (!MathJax) {
                        return null;
                    }

                    return React.createElement(NodeWithMathJax, _extends({}, _this4.props, { MathJax: MathJax }));
                }
            );
        }
    }]);

    return MathJaxNode;
}(React.PureComponent);

exports.default = MathJaxNode;