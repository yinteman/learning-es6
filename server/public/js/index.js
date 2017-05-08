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

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	{
	  var a = new Map();
	  var o = { p: 'Hello' };

	  a.set(o, 'content');
	  console.log(a);
	}
	{
	  var _a = [1, 2, 3],
	      b = [1, 3, 5],
	      val1 = [2, 3],
	      val2 = { name: 'a' };
	  var map = new Map([[_a, val1], [b, val2]]);
	  console.log(map);
	}
	{
	  var _map = new Map();
	  var k1 = 'abc';
	  _map.set(k1, 2);
	  _map.set('abc', 3);
	  console.log('k1', _map.get(k1));
	  console.log('abc', _map.get('abc'));

	  var arr1 = ['122'],
	      arr2 = ['122'];
	  _map.set(arr1, '123');
	  console.log('arr2', _map.get(arr2));
	  console.log('[122]', _map.get(['122']));
	}
	{
	  var arr = [[1, 'a'], [2, 'b'], [3, 'c']];

	  var map0 = new Map(arr);
	  var map1 = new Map([].concat(_toConsumableArray(map0)).map(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        k = _ref2[0],
	        v = _ref2[1];

	    return [k * 2, v + '$'];
	  }));
	  //es5 [...map0].map(function(item){  由于item是[k,v]的数组对象
	  //将item写成[k,v]，其实是解析赋值 k = item[0] ,v = item[1]
	  //})})
	  console.log(map1);
	  var map2 = new Map([].concat(_toConsumableArray(map0)).filter(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        k = _ref4[0],
	        v = _ref4[1];

	    return k > 1;
	  }));
	  console.log(map2);
	}
	{
	  /*
	  Map 转为对象 前提是所有Map的健都是字符串，他才可以转为对象
	   */
	  var strMapToObject = function strMapToObject(strMap) {
	    var obj = Object.create(null);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = strMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2),
	            k = _step$value[0],
	            v = _step$value[1];

	        obj[k] = v;
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return obj;
	  };

	  /*
	  对象转为Map
	   */

	  var objToStrMap = function objToStrMap(obj) {
	    var strMap = new Map();
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var k = _step2.value;

	        strMap.set(k, obj[k]);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    return strMap;
	  };
	  /*
	  Map转为Json ，map转为Json需要区分两种情况。
	  一种情况是Map的健名都是字符串，转换为Json对象 :实际上时先将strMap转换成对象，然后在变为Json
	  第二章Map的健名有非字符串，这是转换为数组Json
	   */


	  var strMapToJson = function strMapToJson(strMap) {
	    return JSON.stringify(strMapToObject(strMap));
	  };

	  // {"1":"a" ,"2":"b"}
	  var mapToArrayJson = function mapToArrayJson(map) {
	    return JSON.stringify([].concat(_toConsumableArray(map))); //"[[true,7],[{"foo":3}]]"
	  };

	  /*
	  JSON.stringify() 方法将一个JavaScript值转换为一个JSON字符串，
	  如果指定了一个replacer函数，则可以替换值，或者如果指定了一个replacer数组，可选地仅包括指定的属性。
	   */


	  // '{}'

	  /**
	   * Json转换为Map
	   * 正常情况下，所有的健名都是字符串
	   * JSON.parse() 方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。
	   * 但是，有一种特殊情况，整个 JSON 就是一个数组，
	   * 且每个数组成员本身，又是一个有两个成员的数组。
	   * 这时，它可以一一对应地转为Map。这往往是数组转为 JSON 的逆操作。
	   */

	  var jsonToStrMap = function jsonToStrMap(jsonstr) {
	    return objToStrMap(JSON.parse(jsonstr));
	  };
	  //前提是jsonstr的格式需要满足Map构造对象'[[true,7],[{"foo":3},["abc"]]]'


	  var jsonToMap = function jsonToMap(jsonstr) {
	    return new Map(JSON.parse(jsonstr));
	  };

	  var _map2 = new Map();
	  _map2.set('1', 'a').set('2', 'b');
	  console.log(strMapToObject(_map2));
	  console.log(strMapToJson(_map2));JSON.stringify({}); // '{}'
	  JSON.stringify(true); // 'true'
	  JSON.stringify("foo"); // '"foo"'
	  JSON.stringify([1, "false", false]); // '[1,"false",false]'
	  JSON.stringify({ x: 5 }); // '{"x":5}'
	  JSON.stringify({ x: 5, y: 6 }); // "{"x":5,"y":6}"

	  //undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
	  JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
	  var arrayJson = '[[true,7],[{"foo":3},["abc"]]]';
	  console.log(jsonToMap(arrayJson));
	}

	{
	  var s1 = new Set();
	  var _o = { 1: 'a' };
	  s1.add(_o);
	  console.log(s1.has(_o));
	}

/***/ })
/******/ ]);