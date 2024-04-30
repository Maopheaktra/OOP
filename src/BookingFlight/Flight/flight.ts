import { Aeroplanes } from "../../Airline/Aeroplane/aeroplane";
import { Airlines } from "../../Airline/airline";
import { Gate } from "../../Airport/Gate";
import { Route } from "../../Airport/route";
import { Pilot } from "../../Human/Employee/Pilot";
import { Passenger } from "../../Human/Passenger/Passenger";
import { Booking } from "../Booking/booking";


export class Flight{
    constructor(
        private flightNumber: number,
        private booking: Booking,
        private route:Route[],
        private gate:Gate[],
        private aeroplan:Aeroplanes,
        private pilot:Pilot[],
        private airline:Airlines,
        private passengers:Passenger[]
        ){
            this.flightNumber = flightNumber;
            this.booking = booking;
            this.route = route;
            this.gate = gate;
            this.aeroplan = aeroplan;
            this.pilot = pilot;
            this.airline = airline;
            this.passengers = passengers;
        }
        getFlightNumber(){
            return this.flightNumber;
        }
        addFlight(){
            return this.booking;
        }
}