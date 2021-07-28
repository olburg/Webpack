/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/albums.js":
/*!**************************!*\
  !*** ./src/js/albums.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAlbums\": () => (/* binding */ getAlbums)\n/* harmony export */ });\nconst getAlbums = (userId) => {\n  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)\n    .then((response) => response.json())\n    .then((album) => renderAlbums(album));\n};\n\nconst renderAlbums = (albumsList) => {\n  const albumscontent = document.querySelector(\"#content\");\n  albumscontent.innerHTML = \"\";\n  albumsList.forEach((album) => {\n    document.querySelector(\"#content\").innerHTML += `<p>${album.title}</p>`;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://webpack-hw/./src/js/albums.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsListenersInfo\": () => (/* binding */ tabsListenersInfo),\n/* harmony export */   \"getInfo\": () => (/* binding */ getInfo),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers),\n/* harmony export */   \"getTodo\": () => (/* reexport safe */ _todo__WEBPACK_IMPORTED_MODULE_0__.getTodo),\n/* harmony export */   \"getPosts\": () => (/* reexport safe */ _posts__WEBPACK_IMPORTED_MODULE_1__.getPosts),\n/* harmony export */   \"getAlbums\": () => (/* reexport safe */ _albums__WEBPACK_IMPORTED_MODULE_2__.getAlbums)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts */ \"./src/js/posts.js\");\n/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums */ \"./src/js/albums.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\n// import users from \"./user\";\n// import todos from \"./todo\";\n// import albums from \"./albums\";\n// import posts from \"./posts\";\n\n\n\n\n\nconst Url = \"https://jsonplaceholder.typicode.com\";\n\nconst getUsers = async () => {\n  const response = await fetch(`${Url}/users`);\n  const users = await response.json();\n  (0,_user__WEBPACK_IMPORTED_MODULE_3__.renderUsers)(users);\n  (0,_user__WEBPACK_IMPORTED_MODULE_3__.usersListener)();\n};\n\n\n\n\n\nconst tabsListenersInfo = (userId) => {\n  const info = document.querySelector(\"#info\");\n  info.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    getInfo(userId);\n  });\n\n  const todo = document.querySelector(\"#todo\");\n  todo.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.getTodo)(userId);\n  });\n\n  const post = document.querySelector(\"#posts\");\n  post.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_posts__WEBPACK_IMPORTED_MODULE_1__.getPosts)(userId);\n  });\n\n  const albums = document.querySelector(\"#albums\");\n  albums.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_albums__WEBPACK_IMPORTED_MODULE_2__.getAlbums)(userId);\n  });\n};\n\n\n\nconst getInfo = (userId) => {\n  fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)\n    .then((response) => response.json())\n    .then((user) => {\n      user = user[0];\n\n      const content = document.querySelector(\"#content\");\n      // const abc = document.createElement(\"p\");\n      // abc.innerHTML = `${user.username}, ${user.email}, ${user.phone}`;\n      // content.innerHTML = \"\";\n      // content.appendChild(abc)\n\n      content.innerHTML = `<p>${user.username}, ${user.email}, ${user.phone}</p>`;\n    });\n};\n\ngetUsers();\n\n\n//# sourceURL=webpack://webpack-hw/./src/js/app.js?");

/***/ }),

/***/ "./src/js/posts.js":
/*!*************************!*\
  !*** ./src/js/posts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"renderPosts\": () => (/* binding */ renderPosts)\n/* harmony export */ });\nconst getPosts = (userId) => {\n  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)\n    .then((response) => response.json())\n    .then((post) => renderPosts(post));\n\n  // const content = document.querySelector(\"#content\");\n  // content.innerHTML += `<p>${post.title}</p>`;\n};\n\nconst renderPosts = (postList) => {\n  const postcontent = document.querySelector(\"#content\");\n  postcontent.innerHTML = \"\";\n  postList.forEach((post) => {\n    document.querySelector(\"#content\").innerHTML += `<p>${post.title}</p>`;\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-hw/./src/js/posts.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodo\": () => (/* binding */ getTodo)\n/* harmony export */ });\n// import {renderTodos} from \"./render\"\n\nconst getTodo = (userId) => {\n  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)\n    .then((response) => response.json())\n    .then((todo) => renderTodos(todo));\n};\n\nconst renderTodos = (todoList) => {\n  const todocontent = document.querySelector(\"#content\");\n  todocontent.innerHTML = \"\";\n\n  todoList.forEach((todo) => {\n    const p = document.createElement(\"p\");\n    p.innerText = todo.title;\n    todocontent.appendChild(p);\n    // document.querySelector(\"#content\").innerHTML = `<p>${todo.title}</p>`\n  });\n};\n\n\n\n\n\n// export default getTodo;\n\n\n//# sourceURL=webpack://webpack-hw/./src/js/todo.js?");

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderUsers\": () => (/* binding */ renderUsers),\n/* harmony export */   \"usersListener\": () => (/* binding */ usersListener)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n\nconst renderUsers = (users) => {\n  const sect = document.querySelector(\"#users\");\n  users.forEach((user) => {\n    sect.innerHTML += `<div id=\"user_${user.id}\"><h3>${user.username}</h3></div>`;\n  });\n};\n\nconst usersListener = () => {\n  const list = document.querySelectorAll(\"#users > div\");\n  for (let item of list) {\n    item.addEventListener(\"click\", (event) => {\n      const [, id] = event.currentTarget.id.split(\"_\");\n      document.querySelector(\"#tabs\").classList.remove(\"hidden\");\n      (0,_app__WEBPACK_IMPORTED_MODULE_0__.getInfo)(id);\n\n      (0,_app__WEBPACK_IMPORTED_MODULE_0__.tabsListenersInfo)(id);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://webpack-hw/./src/js/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;