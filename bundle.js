/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat.js":
/*!*****************!*\
  !*** ./chat.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toChat; });\n/* harmony import */ var _chatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList */ \"./chatList.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction toChat(chat_name, seen) {\n  document.getElementById('phone_screen1').style.display = \"none\";\n  document.getElementById('phone_screen2').style.display = \"flex\";\n  var htmlContent = '';\n  var chats = JSON.parse(localStorage.getItem(chat_name)).chats;\n  var _iterator = _createForOfIteratorHelper(chats),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var obj = _step.value;\n      htmlContent += makeMessage(obj);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  document.getElementById('dynamic_content').innerHTML = htmlContent;\n  document.getElementById('user_name').innerText = chat_name;\n  document.getElementById('user_seen').innerText = seen;\n  var input = document.getElementById('message_input');\n  input.value = \"\";\n  document.getElementById('my_form').addEventListener('submit', handleSubmit);\n  document.getElementById(\"return_arrow\").addEventListener(\"click\", _chatList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  function handleSubmit(event) {\n    event.preventDefault();\n    var inputValue = input.value;\n    if (inputValue === \"\") return;\n    input.value = \"\";\n    var name = document.getElementById('user_name').innerText;\n    var fullChat = JSON.parse(localStorage.getItem(name));\n    var array = fullChat.chats;\n    var obj = {\n      id: array.length,\n      \"class\": 2,\n      name: \"Я\",\n      text: inputValue,\n      time: new Date() //.toLocaleTimeString(\"ru-Ru\").substring(0, 5)\n    };\n\n    array.push(obj);\n    fullChat.chats = array;\n    fullChat.status = true;\n    localStorage.setItem(name, JSON.stringify(fullChat));\n    document.getElementById('dynamic_content').insertAdjacentHTML('beforeend', makeMessage(obj));\n  }\n}\nfunction makeMessage(obj) {\n  return \"\\n                <div class=\\\"message message--user-\" + obj[\"class\"] + \"\\\" id=\\\"message\" + obj.id + \"\\\">\\n                    <div class=\\\"message-text\\\">\\n                        <div class=\\\"name\\\">\" + obj.name + \"</div>\\n                        <div class=\\\"text\\\">\" + obj.text + \"</div>\\n                        <div class=\\\"time\\\">\" + new Date(obj.time).toLocaleTimeString(\"ru-Ru\").substring(0, 5) + \"   <i class=\\\"material-icons\\\" id=\\\"done\\\">done_all</i></div>\\n                    </div>\\n                </div>\";\n}\n\n//# sourceURL=webpack:///./chat.js?");

/***/ }),

/***/ "./chatList.js":
/*!*********************!*\
  !*** ./chatList.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toChatList; });\n/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat */ \"./chat.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction toChatList() {\n  var names = [\"Дженнифер\", \"Крис\", \"Олег\", \"Екатерина\", \"Сергей\", \"Кристина\", \"Никита\", \"Барри\", \"Оливер\", \"Кларк\"];\n  document.getElementById('phone_screen2').style.display = \"none\";\n  document.getElementById('phone_screen1').style.display = \"flex\";\n  var fullChats = [];\n  for (var _i = 0, _names = names; _i < _names.length; _i++) {\n    var chatName = _names[_i];\n    var chat = localStorage.getItem(chatName);\n    var fullChat = void 0;\n    if (chat) {\n      fullChat = JSON.parse(chat);\n    } else {\n      var obj = {\n        id: 0,\n        \"class\": 1,\n        name: chatName,\n        text: \"Привет!\",\n        time: \"Nov 04 2022 00:01:00 AM\"\n      };\n      fullChat = {\n        chats: [obj],\n        name: chatName,\n        seen: \"был(а) 2 часа назад\",\n        status: false\n      };\n      localStorage.setItem(chatName, JSON.stringify(fullChat));\n    }\n    fullChats.push(fullChat);\n  }\n  fullChats.sort(function (a, b) {\n    return new Date(b.chats[b.chats.length - 1].time).getTime() - new Date(a.chats[a.chats.length - 1].time).getTime();\n  });\n  var htmlContent = '';\n  for (var _i2 = 0, _fullChats = fullChats; _i2 < _fullChats.length; _i2++) {\n    var _chat = _fullChats[_i2];\n    htmlContent += makeListObj(_chat);\n  }\n  document.getElementById('chat_list').innerHTML = htmlContent;\n  var chatListButtons = document.getElementsByClassName(\"list-object\");\n  var _iterator = _createForOfIteratorHelper(chatListButtons),\n    _step;\n  try {\n    var _loop = function _loop() {\n      var button = _step.value;\n      button.addEventListener(\"click\", function () {\n        var info = button.id.split(\";\");\n        Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info[0], info[1]);\n      });\n    };\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction makeListObj(fullChat) {\n  var last = fullChat.chats.pop();\n  var status = \"\";\n  if (fullChat.status) status = \"done_all\";\n  return \"\\n                <button class=\\\"list-object\\\" id=\\\"\" + fullChat.name + \";\" + fullChat.seen + \"\\\">\\n                    <div class=\\\"avatar\\\">\\n                        <i class=\\\"material-icons account-circle\\\">account_circle</i>\\n                    </div>\\n                    <div class=\\\"name-text\\\">\\n                        <div class=\\\"list-object-name\\\">\" + fullChat.name + \"</div>\\n                        <div class=\\\"list-object-text\\\">\" + last.text + \"</div>\\n                    </div>\\n                    <div class=\\\"time-status\\\">\\n                        <div class=\\\"list-object-time\\\">\" + new Date(last.time).toLocaleTimeString(\"ru-Ru\").substring(0, 5) + \"</div>\\n                        <div class=\\\"list-object-status\\\">\\n                            <i class=\\\"material-icons status-icon\\\">\" + status + \"</i>\\n                        </div>\\n                    </div>\\n                </button>\";\n}\n\n//# sourceURL=webpack:///./chatList.js?");

/***/ }),

/***/ "./chatList_style.css":
/*!****************************!*\
  !*** ./chatList_style.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chatList_style.css?");

/***/ }),

/***/ "./chat_style.css":
/*!************************!*\
  !*** ./chat_style.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat_style.css?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chatList_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatList_style.css */ \"./chatList_style.css\");\n/* harmony import */ var _chatList_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chatList_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chat_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat_style.css */ \"./chat_style.css\");\n/* harmony import */ var _chat_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chat_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList */ \"./chatList.js\");\n\nObject(_chatList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });