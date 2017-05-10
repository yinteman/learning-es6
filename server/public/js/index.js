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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _templateObject = _taggedTemplateLiteral(['The total is ', ' (', ' with tax)'], ['The total is ', ' (', ' with tax)']);

	__webpack_require__(2);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	{
	  var test1 = 'a1a2a3'.match(/a\d/g);
	  var test2 = 'a1a2a3'.match(new RegExp('a\\d', 'gy'));
	  var test3 = 'a1a2a3'.match(new RegExp('a\\d', 'y'));
	  console.log(test3);
	  /*console.log(`\u{20007}`)
	  console.log('𠀇𠀇'.match(/𠀇/))*/
	  console.log('a', '\u20BB7');
	  console.log('a1', '\uD842\uDFB7');
	}
	/*
	遍历器 for(let code of str){
	  使用新增加的遍历器，可以访问到unicode-16的字符
	}
	 */
	{
	  //passtru的写法和
	  var passtru = function passtru(literals) {
	    console.log(arguments); //arguments [array[3] , 30 , 31.5]
	    var res = '',
	        i = 0;
	    while (i < literals.length) {
	      res += literals[i++];
	      if (i < arguments.length) {
	        res += arguments[i];
	      }
	    }
	    return res;
	  };

	  var passtru1 = function passtru1(literals) {
	    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      values[_key - 1] = arguments[_key];
	    }

	    console.log(values);
	    var res = '';
	    for (var index = 0; index < values.length; index++) {
	      res += literals[index] + values[index];
	    }
	    res += literals[index];
	    return res;
	  };

	  var total = 30;
	  var msg = passtru1(_templateObject, total, total * 1.05);

	  console.log(msg);
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Iterator 主要用于遍历器可以结合gerator yield快递构建
	 */

	{
	  //一般非原生自带的obj需要使用Iterator的时候的部署
	  var obj = _defineProperty({
	    arr1: [1, 2, 3], arr2: [].concat(_toConsumableArray("person"))
	  }, Symbol.iterator, function () {
	    var index = 0,
	        arr = [].concat(this.arr1, this.arr2);
	    return {
	      next: function next() {
	        if (index < arr.length) {
	          return {
	            value: arr[index++], done: false
	          };
	        } else {
	          return { value: arr[index++], done: true };
	        }
	      }
	    };
	  });

	  var it = obj[Symbol.iterator]();
	  console.log(it.next());
	}

/***/ })
/******/ ]);