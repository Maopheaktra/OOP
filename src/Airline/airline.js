"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airlines = void 0;
var Airlines = /** @class */ (function () {
    function Airlines(name) {
        this.airplane = [];
        this.name = name;
    }
    Airlines.prototype.addAeroplane = function (airplane) {
        return this.airplane.push(airplane);
    };
    return Airlines;
}());
exports.Airlines = Airlines;
