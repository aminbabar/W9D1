const Util = {
    inherits(childClass, parentClass) {
        function Surrogate() { }
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },


    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    distance(point1, point2) {
        let x_1 = point1[0];
        let x_2 = point2[0];
        let y_1 = point1[1];
        let y_2 = point2[1];
        return Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
    }

    

};

// window.Util = Util;
module.exports = Util;

