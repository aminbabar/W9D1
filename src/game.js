const Asteroid = require("./asteroid.js");

const DIM_X = 1600;
const DIM_Y = 900;
const NUM_ASTEROIDS = 10;


function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroids({pos: this.randomPosition()}));
    }
}


Game.prototype.randomPosition = function () {
    let x_pos = Math.floor(DIM_X);
    let y_pos = Math.floor(DIM_Y);
    return [x_pos, y_pos];
}


Game.prototype.draw(ctx) = function () {
    ctx.clearRect();
    for (ast of this.asteroids) {
        ast.draw(ctx);
    }
}


Game.prototype.moveObjects = function () {
    for (ast of this.asteroids) {
        ast.move();
    }
}