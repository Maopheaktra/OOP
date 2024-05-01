"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airlines = void 0;
var aeroplane_1 = require("./Aeroplane/aeroplane");
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
var PM_Airline = new Airlines("PM_Airline");
var Aeroplane1 = new aeroplane_1.Aeroplanes("PHN");
PM_Airline.addAeroplane(Aeroplane1);
console.log(PM_Airline);
