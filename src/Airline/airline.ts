import { Aeroplanes } from "./Aeroplane/aeroplane";
import { Flight } from "../BookingFlight/Flight/flight";
import { Employee } from "../Human/Employee/employee";

export class Airlines{
    private name: string
    private airplane: Aeroplanes[] = []
    constructor(name: string){
        this.name = name
   }
   addAeroplane(airplane: Aeroplanes){
        return this.airplane.push(airplane);
   }
}


