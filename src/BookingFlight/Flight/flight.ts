import { Aeroplanes } from "../../Airline/Aeroplane/aeroplane";
import { Airlines } from "../../Airline/airline";
import { Gate } from "../../Airport/Gate";
import { Route } from "../../Airport/route";
import { Pilot } from "../../Human/Employee/Pilot";
import { Passenger } from "../../Human/Passenger/Passenger";
import { Baggages } from "../Booking/bagages";
import { CoPilot } from "../../Human/Employee/Co-Pilot";
import { date } from "../../Date-time/date";
import { time } from "../../Date-time/time";
import { Meal } from "../Booking/meal";
import { Booking } from "../Booking/booking";


export class Flight{
    meal: Meal;
    constructor(
        private flightNumber: number,
        private route:Route[],
        private gate:Gate[],
        private aeroplan:Aeroplanes,
        private pilot:Pilot[],
        private airline:Airlines,
        private passengers:Passenger[]=[],
        private date : Date,
        private CoPilot : CoPilot[] = [],
        private Meal : Meal,
        private time : time,

    ){
            this.flightNumber = flightNumber;
            this.route = route;
            this.gate = gate;
            this.aeroplan = aeroplan;
            this.pilot = pilot;
            this.airline = airline;
            this.passengers = passengers;
            this.CoPilot = CoPilot;
            this.time = time,
            this.date = date

        }
        
        getFlightNumber(){
            return this.flightNumber;
        }
        //get passenger 
        getPassenger(){
            return this.passengers;
        }
        getFlightDate(){
            return this.date;
        }        
        getTime(){
            return this.time;
        }
        getPilotFromFlight(){
            return this.pilot;
        }
        getGate(){
            return this.gate;
        }
        

}