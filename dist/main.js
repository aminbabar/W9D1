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

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction Asteroid(options) {\n\n    options.color = options.color || \"blue\";\n    options.pos = options.pos || [0, 0];\n    // random bww 0 and 10 Math.ceil(Math.random() * 10)\n    options.vel = options.vel || Util.randomVec(Math.ceil(Math.random() * 10));\n    let min = Math.ceil(5);\n    let max = Math.floor(50);\n    options.radius = options.radius || Math.floor(Math.random() * (max - min) + min);\n    MovingObject.call(this, options);\n\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nwindow.Asteroid = Asteroid;\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://webpack-demo/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nconst DIM_X = 1600;\nconst DIM_Y = 900;\nconst NUM_ASTEROIDS = 100;\n\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n    for(let i = 0; i < NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({pos: this.randomPosition()}));\n    }\n}\n\n\nGame.prototype.randomPosition = function () {\n   \n    let x_pos = Math.floor(DIM_X) * Math.random();\n    let y_pos = Math.floor(DIM_Y) * Math.random();\n    return [x_pos, y_pos];\n}\n\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    for (ast of this.asteroids) {\n        ast.draw(ctx);\n    }\n}\n\n\nGame.prototype.moveObjects = function () {\n    for (ast of this.asteroids) {\n        ast.move();\n    }\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://webpack-demo/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Asteroid = require(\"./asteroid.js\");\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n    \n     this.game = new Game();\n     this.ctx = ctx;\n}\n\n\nGameView.prototype.start = function() {\n    setInterval(() => {\n        this.game.moveObjects();\n        this.game.draw(this.ctx);\n    }, 20)\n}\n\nwindow.GameView = GameView;\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://webpack-demo/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// const MovingObject = require(\"./moving_object\");\n// const Util = require(\"./utils\")\n// const Asteroid = require(\"./asteroid\")\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  canvas.width = 1600;\n  canvas.height = 900;\n  const ctx = canvas.getContext(\"2d\");\n  let gameview = new GameView(ctx);\n  gameview.start();\n  window.ctx = ctx;\n\n});\n\nconsole.log(\"Webpack is working\")\n\n\n// import _ from 'lodash';\n\n\n// function component() {\n//   const element = document.createElement('div');\n\n//   document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"canvas\");\n//     const ctx = canvas.getContext(\"2d\");\n//   });\n\n//   // Lodash, currently included via a script, is required for this line to work\n//   // Lodash, now imported by this script\n//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n//   return element;\n// }\n\n\n\n// console.log(\"Webpack is working\")\n// document.body.appendChild(component());\n\n\n\n// console.log(\"in index.js\")\n\n// const Game = require(\"./game\")\n// const MovingObject = require(\"./moving_object\")\n\n\n// const game = new Game()\n// console.log(game)\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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