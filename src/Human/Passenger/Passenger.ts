import { Gender,Person } from "../Person";
import { Booking } from "../../BookingFlight/Booking/booking";
import { Gate } from "../../Airport/Gate";
export class Passenger extends Person {
    private passengerID: string;
    private bookingTrip: Booking []=[];
    constructor(passengerID: string,Name:string,email: string,gender: Gender) {
        super(Name, email,gender)
        this.passengerID = passengerID;
        gender = gender
    }
    addTrip(trip:Booking) {
        this.bookingTrip.push(trip)
    }
    findGate(){
        let gateOfFlight = []
        for (let trip of this.bookingTrip){
            gateOfFlight.push(trip.getGateFromFlight())
        } 
        return gateOfFlight
    }
    

}

