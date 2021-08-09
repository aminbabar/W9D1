
const MovingObject = require("./moving_object");

const Util = require("./utils.js");


function Asteroid(options) {
    let color = ["green", "pink", "gold", "blue", "orange"]
    options.color = color[Math.floor(color.length * Math.random())];
    options.pos = options.pos || [0, 0];
    // random bww 0 and 10 Math.ceil(Math.random() * 10)
    options.vel = options.vel || Util.randomVec(Math.ceil(Math.random() * 10));
    let min = Math.ceil(1);
    let max = Math.floor(50);
    options.radius = options.radius || Math.floor(Math.random() * (max - min) + min);
    MovingObject.call(this, options);

}

Util.inherits(Asteroid, MovingObject);


window.Asteroid = Asteroid;


module.exports = Asteroid;