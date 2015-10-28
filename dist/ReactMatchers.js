module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var makeProps = function makeProps(props) {
	  var nprops = Object.assign({}, props);
	  delete nprops.children;
	  return nprops;
	};

	var makeChildren = function makeChildren(children) {
	  if (Array.isArray(children)) {
	    return children;
	  }
	  return [children];
	};

	var areElementsEq = function areElementsEq(actual, expected, eq, testers) {
	  if (!eq(actual.type, expected.type, testers)) {
	    return false;
	  }
	  if (!eq(makeProps(actual.props), makeProps(expected.props), testers)) {
	    return false;
	  }
	  var actChildren = makeChildren(actual.props.children);
	  var expChildren = makeChildren(expected.props.children);
	  for (var idx = 0; idx < actChildren.length; idx++) {
	    var ac = actChildren[idx];
	    var ex = expChildren[idx];
	    if (_react2['default'].isValidElement(ac)) {
	      if (!areElementsEq(ac, ex, eq, testers)) {
	        return false;
	      }
	    } else {
	      if (!eq(ac, ex, testers)) {
	        return false;
	      }
	    }
	  }
	  return true;
	};

	exports['default'] = {
	  toEqualElement: function toEqualElement(util, testers) {
	    return {
	      compare: function compare(actual, expected) {
	        var res = {};
	        res.pass = areElementsEq(actual, expected, util.equals, testers);
	        return res;
	      }
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);