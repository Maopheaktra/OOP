
import { Departure } from "../../Departure/Departure";
import { Gate } from "./Gate";
import { Route } from "./route";
export class Airport{
    constructor(
        private name: string,
        private gate: Gate[] = [],
        private route: Route[] = [],
        private departure:Departure,
        private  arrivalPlace : Departure,
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
      
}