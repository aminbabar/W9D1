const Game = require("./game");
const Util = require("./utils");
const DIM_X = 1600;
const DIM_Y = 900;


function MovingObject (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();    
    ctx.stroke(); 
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.wrap(this.pos);
}

MovingObject.prototype.wrap = function (pos) {
    if (pos[0] > DIM_X) {
        this.pos[0] = 0;
    }
    else if (pos[0] < 0) {
        this.pos[0] = DIM_X;
    }
    else if (pos[1] > DIM_Y) {
        this.pos[1] = 0;
    }
    else if (pos[1] < 0) {
        this.pos[1] = DIM_Y;
    }
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    if (Util.distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {
        return true;
    }
    return false;
}








// window.MovingObject = MovingObject;
module.exports = MovingObject;
