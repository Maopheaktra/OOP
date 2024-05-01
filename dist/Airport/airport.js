"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(name, gate, route) {
        if (gate === void 0) { gate = []; }
        if (route === void 0) { route = []; }
        this.name = name;
        this.gate = gate;
        this.route = route;
        this.name = name;
    }
    Airport.prototype.getName = function () {
        return this.name;
    };
    Airport.prototype.addGate = function (gate) {
        this.gate.push(gate);
    };
    Airport.prototype.addRoute = function (route) {
        this.route.push(route);
    };
    return Airport;
}());
exports.Airport = Airport;
