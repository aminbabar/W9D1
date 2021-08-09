/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction Asteroid(options) {\n\n    options.color = options.color || \"blue\";\n    options.pos = options.pos || [100, 100];\n    // random bww 0 and 10 Math.ceil(Math.random() * 10)\n    options.vel = options.vel || Util.randomVec(Math.ceil(Math.random() * 10));\n    let min = Math.ceil(5);\n    let max = Math.floor(50);\n    options.radius = options.radius || Math.floor(Math.random() * (max - min) + min);\n    MovingObject.call(this, options);\n\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nwindow.Asteroid = Asteroid;\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://webpack-demo/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  canvas.width = 1600;\n  canvas.height = 900;\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx;\n\n  // const mo = new MovingObject({\n  //   pos: [30, 30],\n  //   vel: [10, 10],\n  //   radius: 5,\n  //   color: \"#00FF00\"\n  // });\n\n  // mo.draw(ctx);\n});\n\nconsole.log(\"Webpack is working\")\n\n\n// import _ from 'lodash';\n\n\n// function component() {\n//   const element = document.createElement('div');\n\n//   document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"canvas\");\n//     const ctx = canvas.getContext(\"2d\");\n//   });\n\n//   // Lodash, currently included via a script, is required for this line to work\n//   // Lodash, now imported by this script\n//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n//   return element;\n// }\n\n\n\n// console.log(\"Webpack is working\")\n// document.body.appendChild(component());\n\n\n\n// console.log(\"in index.js\")\n\n// const Game = require(\"./game\")\n// const MovingObject = require(\"./moving_object\")\n\n\n// const game = new Game()\n// console.log(game)\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();    \n    ctx.stroke(); \n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n}\n\n// window.MovingObject = MovingObject;\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack://webpack-demo/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() { }\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\n// window.Util = Util;\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;