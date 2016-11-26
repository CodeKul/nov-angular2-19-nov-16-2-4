"use strict";
var Vehicle = (function () {
    function Vehicle() {
        this.speed = 10; // state
    }
    Vehicle.prototype.calculateSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
