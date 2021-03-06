// const Asteroid = require("./asteroid.js");

const Game = require("./game.js");

function GameView(ctx) {
    
     this.game = new Game();
     this.ctx = ctx;
}


GameView.prototype.start = function() {
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20)
}

window.GameView = GameView;

module.exports = GameView;