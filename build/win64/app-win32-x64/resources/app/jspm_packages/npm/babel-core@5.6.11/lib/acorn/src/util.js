/* */ 
"format cjs";
"use strict";

var _babelToolsProtectJs2 = require("./../../babel/tools/protect.js");

var _babelToolsProtectJs3 = _interopRequireDefault(_babelToolsProtectJs2);

exports.__esModule = true;
exports.isArray = isArray;
exports.has = has;

_babelToolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

// Checks if an object has a property.

function has(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}