'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _loadScript = require('load-script');

var _loadScript2 = _interopRequireDefault(_loadScript);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global MathJax */


var MathJaxProvider = function (_React$Component) {
    _inherits(MathJaxProvider, _React$Component);

    function MathJaxProvider(props) {
        _classCallCheck(this, MathJaxProvider);

        var _this = _possibleConstructorReturn(this, (MathJaxProvider.__proto__ || Object.getPrototypeOf(MathJaxProvider)).call(this, props));

        _this.hasNodes = false;
        _this.loaded = false;

        _this.registerNode = function () {
            _this.hasNodes = true;
        };

        _this.load = function () {
            var script = _this.props.script;


            if (_this.loaded || !_this.hasNodes) {
                return;
            }

            _this.loaded = true;

            if (!script) {
                _this.onLoad(null);
                return;
            }

            (0, _loadScript2.default)(script, _this.onLoad);
        };

        _this.onLoad = function (err) {
            var options = _this.props.options;

            MathJax.Hub.Config(options);

            _this.setState({
                MathJax: MathJax
            });
        };

        _this.state = {
            MathJax: null,
            registerNode: _this.registerNode
        };
        return _this;
    }

    _createClass(MathJaxProvider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.load();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.load();
        }

        // Is there any math nodes to typeset ?


        // Have we already loaded MathJax ?


        /*
         * Signal that there is at least one node to typeset.
         * It will trigger the mathjax loading.
         */


        /*
         * Load the MathJax library
         */

    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return React.createElement(
                _context2.default.Provider,
                { value: this.state },
                children
            );
        }
    }]);

    return MathJaxProvider;
}(React.Component);

MathJaxProvider.defaultProps = {
    script: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML',
    options: {
        tex2jax: {
            inlineMath: []
        },
        showMathMenu: false,
        showMathMenuMSIE: false
    }
};
exports.default = MathJaxProvider;