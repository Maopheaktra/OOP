import { Gender } from "../Person";
import { crewMember,Employee } from "./employee";
import { Flight } from "../../BookingFlight/Flight/flight";
import { date } from "../../Date-time/date";
 
export class CoPilot extends Employee {
    constructor(
        private CardID : string,
        salary: number, 
        Name:string,
        email: string, 
        gender:Gender,
        private date: Date[] = [],
        private flight : Flight[] = [],
        Category: crewMember

    ){
        super(Name,email,gender,Category);
        this.CardID = CardID;
        this.Category = Category
    }
    addflight(flight: Flight){
        return this.flight.push(flight);
    }
    addSchedule(schedule: Date){
        return this.date.push(schedule);
    }
    getSchedule(){
        return this.date;
    }
    getPilotId(){
        return this.CardID;
    }
    findPilotFlights(schedule: Date){
        let listFlightForPilot =[]
        for(let flight of this.flight){
            if((flight.getFlightDate().getTime() == schedule.getTime()) && flight.getPilotFromFlight()){
                listFlightForPilot.push(flight)
            }
          
        }
        return listFlightForPilot
      }
}
