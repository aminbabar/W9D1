
// const MovingObject = require("./moving_object");
// const Util = require("./utils")
// const Asteroid = require("./asteroid")
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 1600;
  canvas.height = 900;
  const ctx = canvas.getContext("2d");
  let gameview = new GameView(ctx);
  gameview.start();
  window.ctx = ctx;

});

console.log("Webpack is working")
// test

// import _ from 'lodash';


// function component() {
//   const element = document.createElement('div');

//   document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");
//   });

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }



// console.log("Webpack is working")
// document.body.appendChild(component());



// console.log("in index.js")

// const Game = require("./game")
// const MovingObject = require("./moving_object")


// const game = new Game()
// console.log(game)
