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


