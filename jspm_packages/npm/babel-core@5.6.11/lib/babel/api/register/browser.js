/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

require("../../polyfill");

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// required to safely use babel/register within a browserify codebase

exports["default"] = function () {};

module.exports = exports["default"];