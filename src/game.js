const Asteroid = require("./asteroid.js");

const DIM_X = 1600;
const DIM_Y = 900;
const NUM_ASTEROIDS = 100;


function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
    }
}


Game.prototype.randomPosition = function () {
   
    let x_pos = Math.floor(DIM_X) * Math.random();
    let y_pos = Math.floor(DIM_Y) * Math.random();
    return [x_pos, y_pos];
}


Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    for (ast of this.asteroids) {
        ast.draw(ctx);
    }
}


Game.prototype.moveObjects = function () {
    for (ast of this.asteroids) {
        ast.move();
    }
}


module.exports = Game;