"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aeroplanes = void 0;
var Aeroplanes = /** @class */ (function () {
    function Aeroplanes(referenceNumber, seat) {
        if (seat === void 0) { seat = []; }
        this.referenceNumber = referenceNumber;
        this.seat = seat;
        this.referenceNumber = referenceNumber;
    }
    Aeroplanes.prototype.addSeat = function (seat) {
        return this.seat.push(seat);
    };
    return Aeroplanes;
}());
exports.Aeroplanes = Aeroplanes;
