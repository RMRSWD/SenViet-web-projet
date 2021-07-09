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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nconst loadContact = (content) => {\r\n    document.querySelector('[data-contact]').style.cssText = \"text-decoration: 1px underline; text-underline-offset: 4px; color:white;\"\r\n\r\n    document.querySelector('footer').style.setProperty('position', 'fixed');\r\n\r\n    content.innerHTML = `\r\n        <div class=\"container contact-content p-4 rounded\" style=\"width:100%; height:auto; background-color: rgba(0, 0, 0, 0.5);\">\r\n            <div class=\"container info\">\r\n                <div class=\"fs-5\">\r\n                    <p><i class=\"fas fa-map-marker-alt\"></i> 324 Rue Saint Martin 75003 Paris</p>\r\n                </div>\r\n                <div class=\"fs-5\">\r\n                    <p><i class=\"fas fa-clock\"></i> Monday-Saturday: 11am-15pm </p>\r\n                </div>\r\n                <div class=\"fs-5\">\r\n                    <p><i class=\"fas fa-phone-alt\"></i> 01 44 61 69 40</p>\r\n                </div>\r\n                <div class=\"fs-5\">\r\n                    <p><i class=\"fas fa-envelope\"></i> Message Us</p>\r\n                </div>\r\n                <form class=\"text-dark\">\r\n                    <div class=\"form-floating mb-3\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full Name\">\r\n                        <label for=\"name\">Full Name</label>\r\n                    </div>\r\n                    <div class=\"form-floating mb-3\">\r\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n                        <label for=\"email\">Email</label>\r\n                    </div>\r\n                    <div class=\"form-floating\">\r\n                        <textarea id=\"comment\" class=\"form-control\" placeholder=\"Comment\" style=\"height: 100px\"></textarea>\r\n                        <label for=\"comment\">Leave a comment here</label>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"container google-map\">\r\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4739460350065!2d2.353287815425616!3d48.86824090796753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e103687d051%3A0xfc6c9fdec2614d4d!2s324%20Rue%20Saint-Martin%2C%2075003%20Paris!5e0!3m2!1sfr!2sfr!4v1624783830347!5m2!1sfr!2sfr\"\r\n                    width=\"100%\" height=\"100%\" loading=\"lazy\"></iframe>\r\n            </div>\r\n        </div>\r\n    `\r\n}\r\n\r\n\n\n//# sourceURL=webpack://SenViet.github.io/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomeContent\": () => (/* binding */ loadHomeContent)\n/* harmony export */ });\nconst loadHomeContent = (content) => {\r\n    document.querySelector('[data-home]').style.cssText = \"text-decoration: 1px underline; text-underline-offset: 4px; color:white\"\r\n\r\n    document.querySelector('footer').style.setProperty('position', 'fixed');\r\n    content.style.cssText = \"height:85vh\"\r\n\r\n    // content.innerHTML = \"\";\r\n    content.innerHTML = `\r\n        <div class=\"d-flex flex-column text-center homepage justify-content-center\">\r\n            <h1>Bienvenue</h1>\r\n            <p class=\"caption\">Xin Chào Mọi Người</p>\r\n        </div>`\r\n}\r\n\r\n\n\n//# sourceURL=webpack://SenViet.github.io/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content')\r\nconst headerOptions = document.querySelectorAll('.header-option')\r\n\r\nheaderOptions.forEach(el => el.addEventListener('click', () => {\r\n    headerOptions.forEach(el => {\r\n        el.style.removeProperty('text-decoration');\r\n        el.style.removeProperty('color');\r\n    })\r\n}))\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)(content)\r\n});\r\n\r\ndocument.querySelector('[data-logo]').addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)(content)\r\n});\r\n\r\ndocument.querySelector('[data-home]').addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)(content)\r\n});\r\n\r\ndocument.querySelector('[data-menu]').addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)(content);\r\n});\r\n\r\ndocument.querySelector('[data-contact]').addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)(content);\r\n});\n\n//# sourceURL=webpack://SenViet.github.io/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = (content) => {\r\n    document.querySelector('[data-menu]').style.cssText = \"text-decoration: 1px underline; text-underline-offset: 4px;color:white;\"\r\n\r\n    document.querySelector('footer').style.setProperty('position', 'relative');\r\n    content.style.cssText = \"height:auto\"\r\n\r\n    // content.innerHTML = \"\";\r\n    content.innerHTML = `\r\n    <div class=\"menu gx-5\"> \r\n        <div class=\"row\" id=\"menu-content\"></div> \r\n    </div > `\r\n\r\n    const menu = content.querySelector('#menu-content')\r\n    for (let i = 1; i <= 8; i++) {\r\n        menu.innerHTML += `\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card mb-3\" style=\"background-color:rgba(0, 0, 0, 0.8); z-index:-1\">\r\n                <div class=\"container mt-3\" style=\"height: 12rem; z-index:1\">\r\n                    <img src=\"./images/menu/${i}.jpg\" class=\"card-img-top\">\r\n                </div>\r\n                <div class=\"card-body text-center\">\r\n                    <p class=\"card-text\">En Cours De Mise À Jour.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary shadow-none\">View More</a>\r\n                </div>\r\n            </div>\r\n        </div>`\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://SenViet.github.io/./src/menu.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
