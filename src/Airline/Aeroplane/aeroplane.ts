import { Seat } from "./seat";

export class Aeroplanes{
    constructor(private referenceNumber: string, private seat: Seat[] = []){
        this.referenceNumber = referenceNumber
        this.seat = []
    }
    addSeat(seat: Seat){
        return this.seat.push(seat)
    }
}
let Airplane1 = new Aeroplanes("1er12");
let seat1 = new Seat("12E");
Airplane1.addSeat(seat1)
