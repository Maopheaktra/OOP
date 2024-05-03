import { Gender,Person } from "../Person";
import { Booking } from "../../BookingFlight/Booking/booking";
import { Airport } from "../../Airport/airport";
import { Gate } from "../../Airport/Gate";
export class Passenger extends Person {
    private passengerID: string;
    private bookingTrip: Booking []=[];
    private airport : Airport[] = []
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
        for (let trip of this.airport){
            gateOfFlight.push(trip.getGateFromFlight())
        } 
        return gateOfFlight
    }
    

}

