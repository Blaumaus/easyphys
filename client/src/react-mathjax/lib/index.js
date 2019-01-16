'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Provider = require('./Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MathJax = {
    Provider: _Provider2.default,
    Node: _Node2.default
};

exports.default = MathJax;