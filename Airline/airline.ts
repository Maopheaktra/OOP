import { Aeroplanes } from "./Aeroplane/aeroplane";
import { Seat } from "./Aeroplane/seat";
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


let PM_Airline = new Airlines("PM_Airline");
let Aeroplane1 = new Aeroplanes("PHN");
PM_Airline.addAeroplane(Aeroplane1);
console.log(PM_Airline);