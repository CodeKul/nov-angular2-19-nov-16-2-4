"use strict";
var Vehicle = (function () {
    function Vehicle() {
        this.speed = 10; // state
        this.vendor = 'MeLayer';
    }
    Vehicle.prototype.calculateSpeed = function () {
        return this.speed;
    };
    Vehicle.prototype.locate = function () {
        console.log('In City');
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
