
import { Departure } from "../Departure/Departure";
import { Airlines } from "../Airline/airline";
import { Gate } from "./Gate";
import { Route } from "./route";
import { Passenger } from "../Human/Passenger/Passenger";
export class Airport{
    constructor(
        private name: string,
        private gate: Gate[] = [],
        private route: Route[] = [],
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
    getRout(){
        return this.route;
    }
    
}