/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/controller.js":
/*!*****************************************!*\
  !*** ./src/js/components/controller.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _todo_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-board */ \"./src/js/components/todo-board.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Controller = /*#__PURE__*/function () {\n  function Controller() {\n    _classCallCheck(this, Controller);\n\n    this.todoBoard = new _todo_board__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.events();\n  }\n\n  _createClass(Controller, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      document.querySelectorAll(\".item-container\").forEach(function (item) {\n        item.addEventListener(\"dragstart\", _this.onDragStart.bind(_this));\n      });\n      document.querySelector(\".items-section\").addEventListener(\"dragover\", this.onDragOver);\n      document.querySelector(\".items-section\").addEventListener(\"drop\", this.onDrop);\n      document.querySelector(\".items-section\").addEventListener(\"mouseover\", this.onMouseOver.bind(this));\n      document.querySelector(\".items-section\").addEventListener(\"mouseout\", this.onMouseOut.bind(this));\n      document.querySelector(\".items-section\").addEventListener(\"click\", this.onClick.bind(this));\n    }\n  }, {\n    key: \"onDragStart\",\n    value: function onDragStart(e) {\n      e.dataTransfer.setData(\"text/plain\", e.target.dataset.index);\n    }\n  }, {\n    key: \"onDragOver\",\n    value: function onDragOver(e) {\n      e.preventDefault();\n    }\n  }, {\n    key: \"onDrop\",\n    value: function onDrop(e) {\n      e.preventDefault();\n\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item\")) {\n          var index = e.dataTransfer.getData(\"text\");\n          var draggableElement = document.querySelector(\"[data-index=\\\"\".concat(index, \"\\\"]\"));\n          var dropzone = e.path[i].parentNode;\n          dropzone.before(draggableElement);\n          e.dataTransfer.clearData();\n          return;\n        } else if (e.path[i].classList.contains(\"item-container\")) {\n          var _index = e.dataTransfer.getData(\"text\");\n\n          var _draggableElement = document.querySelector(\"[data-index=\\\"\".concat(_index, \"\\\"]\"));\n\n          var _dropzone = e.path[i];\n\n          _dropzone.after(_draggableElement);\n\n          e.dataTransfer.clearData();\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"onMouseOver\",\n    value: function onMouseOver(e) {\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item\")) {\n          e.path[i].querySelector(\".options\").classList.add(\"active\");\n          return;\n        } else if (e.path[i].classList.contains(\"item-container\")) {\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"onMouseOut\",\n    value: function onMouseOut(e) {\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item\")) {\n          e.path[i].querySelector(\".options\").classList.remove(\"active\");\n          return;\n        } else if (e.path[i].classList.contains(\"item-container\")) {\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(e) {\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item__checkBox\")) {\n          console.log(e.path[i]);\n          e.path[i].classList.add(\"active\");\n          return;\n        } else if (e.path[i].classList.contains(\"option__edit\")) {\n          console.log(e.path[i]);\n          return;\n        } else if (e.path[i].classList.contains(\"option__delete\")) {\n          console.log(e.path[i]);\n          return;\n        } else if (e.path[i].classList.contains(\"item-container\")) {\n          return;\n        }\n      }\n    }\n  }]);\n\n  return Controller;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/components/controller.js?");

/***/ }),

/***/ "./src/js/components/todo-board.js":
/*!*****************************************!*\
  !*** ./src/js/components/todo-board.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ToDoBoard = function ToDoBoard() {\n  _classCallCheck(this, ToDoBoard);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoBoard);\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/components/todo-board.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controller */ \"./src/js/components/controller.js\");\n\nvar controller = new _components_controller__WEBPACK_IMPORTED_MODULE_0__.default();\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;