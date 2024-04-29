// import { Aeroplanes } from "./Aeroplane/aeroplane";
export class Airlines{
    private name: string
//     private airplane: Aeroplanes[] = []
    constructor(name: string){
        this.name = name
   }
   addAeroplane(airplane: Aeroplanes){
        return this.airplane.push(airplane);
   }
}
