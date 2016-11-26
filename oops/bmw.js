"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var car_1 = require('./car');
var Bmw = (function (_super) {
    __extends(Bmw, _super);
    function Bmw(carName, price, speed, scale) {
        _super.call(this, carName, price, speed);
        this.scale = scale;
    }
    Bmw.prototype.increaseSpeed = function () {
        console.log('Bmw method');
        return _super.prototype.increaseSpeed.call(this) + this.scale;
    };
    Bmw.prototype.scaleFactor = function () {
        this.increaseSpeed() + this.scale;
    };
    return Bmw;
}(car_1.Car));
exports.Bmw = Bmw;
