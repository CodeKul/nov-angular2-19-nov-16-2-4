"use strict";
var Car = (function () {
    function Car(carName, price, speed) {
        var _this = this;
        this.getCarName = function () { return _this.carName; };
        this.carName = carName;
        this.price = price;
        this.speed = speed;
    }
    Object.defineProperty(Car.prototype, "CarName", {
        get: function () {
            return this.CarName;
        },
        set: function (carName) {
            this.carName = carName;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.increaseSpeed = function () {
        console.log('Car Method ');
        return ++this.speed;
    };
    return Car;
}());
exports.Car = Car;
