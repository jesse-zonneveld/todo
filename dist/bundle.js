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
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = function Controller() {\n  _classCallCheck(this, Controller);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/components/controller.js?");

/***/ }),

/***/ "./src/js/components/item.js":
/*!***********************************!*\
  !*** ./src/js/components/item.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import moment from \"moment\";\nvar Item = /*#__PURE__*/function () {\n  function Item(title, priority) {\n    var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n\n    _classCallCheck(this, Item);\n\n    this.title = title;\n    this.priority = priority;\n    this.description = description;\n  }\n\n  _createClass(Item, [{\n    key: \"getPriority\",\n    value: function getPriority() {\n      var _priority;\n\n      switch (this.priority) {\n        case \"low\":\n          _priority = 1;\n          break;\n\n        case \"med\":\n          _priority = 2;\n          break;\n\n        case \"high\":\n          _priority = 3;\n          break;\n\n        default:\n          _priority = 1;\n          break;\n      }\n\n      return _priority;\n    }\n  }]);\n\n  return Item;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/components/item.js?");

/***/ }),

/***/ "./src/js/components/list.js":
/*!***********************************!*\
  !*** ./src/js/components/list.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/js/components/item.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar List = /*#__PURE__*/function () {\n  function List(label) {\n    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    _classCallCheck(this, List);\n\n    this.label = label;\n    this.items = items;\n  }\n\n  _createClass(List, [{\n    key: \"addItem\",\n    value: function addItem(title, priority) {\n      var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n      var item = new _item__WEBPACK_IMPORTED_MODULE_0__.default(title, priority, description);\n      this.items.push(item);\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(index) {\n      this.items.splice(index, 1);\n    }\n  }, {\n    key: \"length\",\n    value: function length() {\n      return this.items.length;\n    }\n  }, {\n    key: \"moveItem\",\n    value: function moveItem(from, to) {\n      this.items.splice(to, 0, this.items.splice(from, 1)[0]);\n    }\n  }, {\n    key: \"topItem\",\n    value: function topItem() {\n      return this.items[0];\n    }\n  }, {\n    key: \"sortByPriority\",\n    value: function sortByPriority() {\n      this.items.sort(function (a, b) {\n        return b.getPriority() - a.getPriority();\n      });\n    }\n  }]);\n\n  return List;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/components/list.js?");

/***/ }),

/***/ "./src/js/components/todo-board.js":
/*!*****************************************!*\
  !*** ./src/js/components/todo-board.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/js/components/list.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ToDoBoard = /*#__PURE__*/function () {\n  function ToDoBoard() {\n    var lists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n    _classCallCheck(this, ToDoBoard);\n\n    this.lists = lists;\n\n    if (lists.length === 0) {\n      this.initializeLists();\n    }\n\n    this.currentListIndex = 0;\n    this.listsContainer = document.querySelector(\".lists\");\n    this.currentItems = document.querySelector(\".items\");\n    this.newListBtn = document.querySelector(\".btn-new-list\");\n    this.addItemBtn = document.querySelector(\".btn-add-item\");\n    this.sortBtn = document.querySelector(\".btn-sort\");\n    this.overlay = document.querySelector(\".overlay\");\n    this.overlayCloseBtns = this.overlay.querySelectorAll(\".btn-overlay-close\");\n    this.overlayCreateListBtn = this.overlay.querySelector(\".btn-create-list\");\n    this.overlayCreateItemBtn = this.overlay.querySelector(\".btn-create-item\");\n    this.setCurrentItems(this.lists[this.currentListIndex]);\n    this.setLists();\n    this.events();\n  }\n\n  _createClass(ToDoBoard, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.currentItems.addEventListener(\"dragover\", this.onDragOver);\n      this.currentItems.addEventListener(\"drop\", this.onDrop.bind(this));\n      this.currentItems.addEventListener(\"mouseover\", this.onMouseOver.bind(this));\n      this.currentItems.addEventListener(\"mouseout\", this.onMouseOut.bind(this)); // this.currentItems.addEventListener(\"click\", this.onClick.bind(this));\n\n      this.addItemBtn.addEventListener(\"click\", this.handleOverlay.bind(this));\n      this.newListBtn.addEventListener(\"click\", this.handleOverlay.bind(this));\n      this.sortBtn.addEventListener(\"click\", this.sortByPriority.bind(this));\n      this.overlay.addEventListener(\"click\", this.closeOverlay.bind(this));\n      this.overlayCloseBtns.forEach(function (btn) {\n        btn.addEventListener(\"click\", _this.closeOverlay.bind(_this));\n      });\n      this.overlayCreateListBtn.addEventListener(\"click\", this.createList.bind(this));\n      this.overlayCreateItemBtn.addEventListener(\"click\", this.createItem.bind(this));\n      document.querySelectorAll(\".list\").forEach(function (list) {\n        list.addEventListener(\"click\", _this.changeList.bind(_this));\n      });\n    }\n  }, {\n    key: \"initializeLists\",\n    value: function initializeLists() {\n      var firstList = new _list__WEBPACK_IMPORTED_MODULE_0__.default(\"My First List\");\n      var completedList = new _list__WEBPACK_IMPORTED_MODULE_0__.default(\"Completed Items\");\n      firstList.addItem(\"Complete an Item\", \"low\", \"Complete an item by clicking on the circle to the left.\");\n      firstList.addItem(\"Understand Priority\", \"med\", \"The color of the cirle to the left is representative of the item's priority. Low, medium, and high priority corresponds to green, yellow, and red respectively.\");\n      firstList.addItem(\"Add an Item\", \"high\", \"Press the 'Add Item' buttom below to add a new item to this list.\");\n      firstList.addItem(\"Reorganize Items\", \"med\", \"Press the 'Sort by priority' in the top right to organize from low to high priority, or simply just drag and drop items where you want.\");\n      firstList.addItem(\"Create a New List\", \"low\", \"Press the 'New List' buttom on the far left to create a new list. You can then view your lists by clicking on the list titles to the left.\");\n      firstList.addItem(\"Have Fun\", \"low\", \"Create as many lists and items as you would like and have fun!\");\n      completedList.addItem(\"View Your Completed Items\", \"low\", \"This is where all your completed items will go, so you can keep track of what you've already done.\");\n      completedList.addItem(\"Clear Completed Items\", \"low\", \"You can clear this list whenever you want by clicking the 'Clear List' button below.\");\n      this.lists.unshift(firstList);\n      this.lists.push(completedList);\n    }\n  }, {\n    key: \"setCurrentItems\",\n    value: function setCurrentItems(list) {\n      var _this2 = this;\n\n      this.currentItems.innerHTML = \"\";\n      list.items.forEach(function (item, i) {\n        _this2.currentItems.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"item-container\\\" data-item-index=\\\"\".concat(i, \"\\\" draggable=\\\"true\\\">\\n                    <div class=\\\"item\\\">\\n                        <div class=\\\"options\\\">\\n                            <div class=\\\"option__edit\\\">\\n                                <i class=\\\"fas fa-edit btn-edit-item\\\"></i>\\n                            </div>\\n                            <div class=\\\"option__delete\\\">\\n                                <i class=\\\"far fa-trash-alt btn-delete-item\\\"></i>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"item__checkBox priority-\").concat(item.priority, \"\\\"></div>\\n                        <div class=\\\"contents\\\">\\n                            <div class=\\\"contents__title\\\">\").concat(item.title, \"</div>\\n                            <div class=\\\"contents__description\\\">\").concat(item.description, \"</div>\\n                        </div>\\n                    </div>\\n                </div>\"));\n      });\n      document.querySelectorAll(\".item-container\").forEach(function (item) {\n        item.addEventListener(\"dragstart\", _this2.onDragStart.bind(_this2));\n        item.addEventListener(\"click\", _this2.handleItemClick.bind(_this2));\n      });\n    }\n  }, {\n    key: \"setLists\",\n    value: function setLists() {\n      var _this3 = this;\n\n      this.listsContainer.innerHTML = \"\";\n      this.lists.forEach(function (list, i) {\n        _this3.listsContainer.insertAdjacentHTML(\"beforeend\", \"<li class=\\\"list\\\" data-index=\\\"\".concat(i, \"\\\">\").concat(list.label, \"</li>\"));\n      });\n    }\n  }, {\n    key: \"sortByPriority\",\n    value: function sortByPriority() {\n      this.lists[this.currentListIndex].sortByPriority();\n      this.setCurrentItems(this.lists[this.currentListIndex]);\n    }\n  }, {\n    key: \"changeList\",\n    value: function changeList(e) {\n      this.currentListIndex = e.currentTarget.dataset.index;\n      this.setCurrentItems(this.lists[this.currentListIndex]);\n    }\n  }, {\n    key: \"handleItemClick\",\n    value: function handleItemClick(e) {\n      if (e.target.classList.contains(\"btn-delete-item\")) {\n        this.deleteItem(e.currentTarget.dataset.itemIndex);\n        this.setCurrentItems(this.lists[this.currentListIndex]);\n      } else if (e.target.classList.contains(\"btn-edit-item\")) {\n        console.log(\"edit\");\n        this.editItem(e.currentTarget.dataset.itemIndex, e);\n        this.setCurrentItems(this.lists[this.currentListIndex]);\n      } else if (e.target.classList.contains(\"item__checkBox\")) {\n        console.log(\"check\");\n        this.handleCheck(e.currentTarget.dataset.itemIndex);\n      }\n    }\n  }, {\n    key: \"deleteItem\",\n    value: function deleteItem(index) {\n      this.lists[this.currentListIndex].removeItem(index);\n    }\n  }, {\n    key: \"editItem\",\n    value: function editItem(index, e) {\n      this.setOverlay(true, true);\n      this.openOverlay(true, true);\n    }\n  }, {\n    key: \"handleCheck\",\n    value: function handleCheck(index) {}\n  }, {\n    key: \"setOverlay\",\n    value: function setOverlay() {\n      var isItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var isEdit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      if (isItem) {\n        if (isEdit) {\n          this.overlay.querySelector(\".item-title\").innerHTML = \"Edit Item\";\n          this.overlay.querySelector(\".btn-create-item\").innerHTML = \"Save\";\n        } else {\n          this.overlay.querySelector(\".item-title\").innerHTML = \"New Item\";\n          this.overlay.querySelector(\".btn-create-item\").innerHTML = \"Create Item\";\n        }\n      } else {\n        if (isEdit) {\n          this.overlay.querySelector(\".list-title\").innerHTML = \"Edit List\";\n          this.overlay.querySelector(\".btn-create-item\").innerHTML = \"Save\";\n        } else {\n          this.overlay.querySelector(\".item-title\").innerHTML = \"New List\";\n          this.overlay.querySelector(\".btn-create-item\").innerHTML = \"Create List\";\n        }\n      }\n    }\n  }, {\n    key: \"handleOverlay\",\n    value: function handleOverlay(e) {\n      if (e.currentTarget == this.addItemBtn) {\n        this.setOverlay(true);\n        this.openOverlay(true);\n      } else {\n        this.setOverlay();\n        this.openOverlay();\n      }\n    }\n  }, {\n    key: \"openOverlay\",\n    value: function openOverlay() {\n      var isItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (isItem) {\n        document.querySelector(\".overlay-inner-item\").classList.add(\"reveal\");\n        document.querySelector(\".overlay-inner-list\").classList.remove(\"reveal\");\n      } else {\n        document.querySelector(\".overlay-inner-item\").classList.remove(\"reveal\");\n        document.querySelector(\".overlay-inner-list\").classList.add(\"reveal\");\n      }\n\n      this.overlay.classList.add(\"reveal\");\n      document.body.classList.add(\"no-scroll\");\n    }\n  }, {\n    key: \"closeOverlay\",\n    value: function closeOverlay(e) {\n      if (e.target == e.currentTarget) {\n        this.overlay.classList.remove(\"reveal\");\n        document.body.classList.remove(\"no-scroll\");\n      }\n    }\n  }, {\n    key: \"createList\",\n    value: function createList(e) {\n      var title = document.querySelector(\".input-list-title\").value;\n      this.lists.push(new _list__WEBPACK_IMPORTED_MODULE_0__.default(title));\n    }\n  }, {\n    key: \"createItem\",\n    value: function createItem(e) {}\n  }, {\n    key: \"onDragStart\",\n    value: function onDragStart(e) {\n      e.dataTransfer.setData(\"text/plain\", e.target.dataset.itemIndex);\n    }\n  }, {\n    key: \"onDragOver\",\n    value: function onDragOver(e) {\n      e.preventDefault();\n    }\n  }, {\n    key: \"onDrop\",\n    value: function onDrop(e) {\n      e.preventDefault();\n\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item\")) {\n          var index = e.dataTransfer.getData(\"text\");\n          var draggableElement = document.querySelector(\"[data-item-index=\\\"\".concat(index, \"\\\"]\"));\n          var dropzone = e.path[i].parentNode;\n          var dragIndex = draggableElement.dataset.itemIndex;\n          var dropIndex = dropzone.dataset.itemIndex;\n\n          if (dragIndex < dropIndex) {\n            dropzone.after(draggableElement);\n          } else {\n            dropzone.before(draggableElement);\n          }\n\n          e.dataTransfer.clearData();\n          this.lists[this.currentListIndex].moveItem(dragIndex, dropIndex);\n          this.setCurrentItems(this.lists[this.currentListIndex]);\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"onMouseOver\",\n    value: function onMouseOver(e) {\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item\")) {\n          e.path[i].querySelector(\".options\").classList.add(\"active\");\n          return;\n        } else if (e.path[i].classList.contains(\"item-container\")) {\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"onMouseOut\",\n    value: function onMouseOut(e) {\n      for (var i = 0; i < e.path.length; i++) {\n        if (e.path[i].classList.contains(\"item\")) {\n          e.path[i].querySelector(\".options\").classList.remove(\"active\");\n          return;\n        } else if (e.path[i].classList.contains(\"item-container\")) {\n          return;\n        }\n      }\n    } // onClick(e) {\n    //     for (let i = 0; i < e.path.length; i++) {\n    //         if (e.path[i].classList.contains(\"item__checkBox\")) {\n    //             console.log(e.path[i]);\n    //             e.path[i].classList.add(\"active\");\n    //             return;\n    //         } else if (e.path[i].classList.contains(\"option__edit\")) {\n    //             console.log(e.path[i]);\n    //             return;\n    //         } else if (e.path[i].classList.contains(\"option__delete\")) {\n    //             console.log(e.path[i]);\n    //             return;\n    //         } else if (e.path[i].classList.contains(\"item-container\")) {\n    //             return;\n    //         }\n    //     }\n    // }\n\n  }]);\n\n  return ToDoBoard;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoBoard);\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/components/todo-board.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/controller */ \"./src/js/components/controller.js\");\n/* harmony import */ var _components_todo_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todo-board */ \"./src/js/components/todo-board.js\");\n\n\nvar controller = new _components_controller__WEBPACK_IMPORTED_MODULE_1__.default();\nvar toDoBoard = new _components_todo_board__WEBPACK_IMPORTED_MODULE_0__.default();\n\n//# sourceURL=webpack://modern-js-workflow-practice/./src/js/main.js?");

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