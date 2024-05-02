import { Gender,Person } from "../Person";
import { Booking } from "../../BookingFlight/Booking/booking";
import { Gate } from "../../Airport/Gate";
import {Meal} from "../../BookingFlight/Flight/meal";
export class Passenger extends Person {
    private passengerID: string;
    private bookingTrip: Booking []=[];
    meal: Meal;
    constructor(passengerID: string, firstName: string, lastName: string, email: string, phone: string, gender: Gender) {
        super(firstName, lastName, email, phone,gender)
        this.passengerID = passengerID;
        gender = gender
    }
    addTrip(trip:Booking) {
        this.bookingTrip.push(trip)
    }
    findGate(){
        let gateOfFlight = []
        for (let trip of this.bookingTrip){
            // gateOfFlight.push(trip.)
        }
    }
    setMeal(meal: Meal){
        this.meal = meal
    }
    getMeal(){
        return this.meal
    }

}

