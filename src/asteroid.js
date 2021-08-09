
const MovingObject = require("./moving_object");

const Util = require("./utils.js");


function Asteroid(options) {

    options.color = options.color || "blue";
    options.pos = options.pos || [100, 100];
    // random bww 0 and 10 Math.ceil(Math.random() * 10)
    options.vel = options.vel || Util.randomVec(Math.ceil(Math.random() * 10));
    let min = Math.ceil(5);
    let max = Math.floor(50);
    options.radius = options.radius || Math.floor(Math.random() * (max - min) + min);
    MovingObject.call(this, options);

}

Util.inherits(Asteroid, MovingObject);


window.Asteroid = Asteroid;


module.exports = Asteroid;