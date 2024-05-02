import { Aeroplanes } from "../../Airline/Aeroplane/aeroplane";
import { Airlines } from "../../Airline/airline";
import { Gate } from "../../Airport/Gate";
import { Route } from "../../Airport/route";
import { Pilot } from "../../Human/Employee/Pilot";
import { Passenger } from "../../Human/Passenger/Passenger";
<<<<<<< HEAD
import { Baggages } from "../Booking/bagages";
import { CoPilot } from "../../Human/Employee/Co-Pilot";
import { date } from "../../Date-time/date";
import { time } from "../../Date-time/time";
import { Meal } from "../Booking/meal";
=======
import { Booking } from "../Booking/booking";
import { Meal } from "./meal";


>>>>>>> 9e2b9c6887ea529d78edb27577596f90584f6c6b
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
<<<<<<< HEAD
        getFlightDate(){
            return this.date;
        }        
        getTime(){
            return this.time;
=======
        //get gate
        getGate(){
            return this.gate
        }

        setMeal(meal: Meal){
            this.meal = meal
        }
        
        getMeal(){
            return this.meal
        }
        //add passenger to the flight
        addPassenger(passenger:Passenger){
            this.passengers.push(passenger);
>>>>>>> 9e2b9c6887ea529d78edb27577596f90584f6c6b
        }
        getPilotFromFlight(){
            return this.pilot;
        }
<<<<<<< HEAD
        getGate(){
            return this.gate;
        }
      

=======
        // getflightduration 
//         getFlightDuration(){
//             let totalMinutes=0;
//             for(let i in this.route){
//                 totalMinutes +=this.route[i];
//             }
//             let hours = Math.floor(totalMinutes/60);
//             let minutes = totalMinutes %  60;
//             return hours + " h " + minutes + " min";
//         }
       
>>>>>>> 9e2b9c6887ea529d78edb27577596f90584f6c6b
}