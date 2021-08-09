const Asteroid = require("./asteroid.js");

const DIM_X = 1600;
const DIM_Y = 900;
const NUM_ASTEROIDS = 6;


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

Game.prototype.checkCollisions = function() {
    for(let i = 0; i < this.asteroids.length; i++) {
        for (let j = i + 1; j < this.asteroids.length; j++) {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                this.remove(i, j);
                alert("collision");
            }
        }
        console.log(`number of asteroids: ${this.asteroids.length}`);
    }
}


Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}


Game.prototype.remove = function(i, j) {
    // asteroid = undefined;
    // debugger;
    if (i > j) {
        this.asteroids.splice(i, 1);
        this.asteroids.splice(j, 1);
    }
    else {
        this.asteroids.splice(j, 1);
        this.asteroids.splice(i, 1);
    }
}

// Game.prototype.wrap = function(pos) {
//     if (pos[0] > DIM_X) {
//         pos[0] = 0;
//     }
//     else if (pos[0] < 0) {
//         pos[0] = DIM_X;
//     }
//     else if (pos[0] > DIM_Y) {
//         pos[1] = 0;
//     }
//     else if (pos[0] < 0) {
//         pos[1] = DIM_Y;
//     }
// }


module.exports = Game;