
import { Departure } from "../Departure/Departure";
import { Gate } from "./Gate";
import { Route } from "./route";
import { Airlines } from "../Airline/airline";
import { Passenger } from "../Human/Passenger/Passenger";
export class Airport{
    constructor(
        private name: string,
        private gate: Gate[] = [],
        private route: Route[] = [],
        private departure:Departure,
        private  arrivalPlace : Departure,
        private airline : Airlines[] = [],
        private passenger : Passenger[] = []
    ){
        this.name = name;
        
    }
    getName(){
        return this.name;
    }
    addGate(gate: Gate){
        this.gate.push(gate);
    }
    addRoute(route: Route){
        this.route.push(route);
    }
    // addAeroplan(aeroplane: Aeroplane) {
    //     this.aeroplan.push(aeroplane);
    // }
      
    addAirline(airline:Airlines){
        this.airline.push(airline);
    }
    getAirline(){
        return this.airline;
    }
    getGate(){
        return this.gate;
    }
    getRoute(){
        return this.route;
    }
    
}
}