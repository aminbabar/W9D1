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

eval("\r\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\n\r\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\n\r\n\r\nfunction Asteroid(options) {\r\n\r\n    options.color = options.color || \"blue\";\r\n    options.pos = options.pos || [100, 100];\r\n    // random bww 0 and 10 Math.ceil(Math.random() * 10)\r\n    options.vel = options.vel || Util.randomVec(Math.ceil(Math.random() * 10));\r\n    let min = Math.ceil(5);\r\n    let max = Math.floor(50);\r\n    options.radius = options.radius || Math.floor(Math.random() * (max - min) + min);\r\n    MovingObject.call(this, options);\r\n\r\n}\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\n\r\nwindow.Asteroid = Asteroid;\r\n\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://webpack-demo/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Assigning to rvalue (27:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| \\n> Game.prototype.draw(ctx) = function () {\\n|     ctx.clearRect();\\n|     for (ast of this.asteroids) {\");\n\n//# sourceURL=webpack://webpack-demo/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\n\r\nfunction GameView(ctx) {\r\n     this.game = new Game();\r\n     this.ctx = ctx;\r\n}\r\n\r\n\r\nGameView.prototype.start = function() {\r\n    setInterval(() => {\r\n        this.game.moveObjects();\r\n        this.game.draw(this.ctx);\r\n    }, 20)\r\n}\r\n\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack://webpack-demo/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\r\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const canvas = document.getElementById(\"canvas\");\r\n  canvas.width = 1600;\r\n  canvas.height = 900;\r\n  const ctx = canvas.getContext(\"2d\");\r\n  window.ctx = ctx;\r\n\r\n  // let gameView = new GameView(ctx);\r\n  // gameView.start();\r\n  \r\n\r\n\r\n  // const mo = new MovingObject({\r\n  //   pos: [30, 30],\r\n  //   vel: [10, 10],\r\n  //   radius: 5,\r\n  //   color: \"#00FF00\"\r\n  // });\r\n\r\n  // mo.draw(ctx);\r\n});\r\n\r\n\r\n\r\nconsole.log(\"Webpack is working\")\r\n\r\n\r\n// import _ from 'lodash';\r\n\r\n\r\n// function component() {\r\n//   const element = document.createElement('div');\r\n\r\n//   document.addEventListener(\"DOMContentLoaded\", () => {\r\n//     const canvas = document.getElementById(\"canvas\");\r\n//     const ctx = canvas.getContext(\"2d\");\r\n//   });\r\n\r\n//   // Lodash, currently included via a script, is required for this line to work\r\n//   // Lodash, now imported by this script\r\n//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n\r\n//   return element;\r\n// }\r\n\r\n\r\n\r\n// console.log(\"Webpack is working\")\r\n// document.body.appendChild(component());\r\n\r\n\r\n\r\n// console.log(\"in index.js\")\r\n\r\n// const Game = require(\"./game\")\r\n// const MovingObject = require(\"./moving_object\")\r\n\r\n\r\n// const game = new Game()\r\n// console.log(game)\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (options) {\r\n    this.pos = options.pos;\r\n    this.vel = options.vel;\r\n    this.radius = options.radius;\r\n    this.color = options.color;\r\n}\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2 * Math.PI);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();    \r\n    ctx.stroke(); \r\n}\r\n\r\nMovingObject.prototype.move = function() {\r\n    this.pos[0] += this.vel[0];\r\n    this.pos[1] += this.vel[1];\r\n}\r\n\r\n// window.MovingObject = MovingObject;\r\nmodule.exports = MovingObject;\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\r\n    inherits(childClass, parentClass) {\r\n        function Surrogate() { }\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n\r\n\r\n    // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n};\r\n\r\n// window.Util = Util;\r\nmodule.exports = Util;\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/utils.js?");

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