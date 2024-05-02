import { Gender } from "../Person";
import { crewMember,Employee } from "./employee";
import { Flight } from "../../BookingFlight/Flight/flight";
import { date } from "../../Date-time/date";

export enum ROLE {
    CoPilot,
    Pilot
}
export abstract class Pilot extends Employee {
    constructor(
        private CardID : string,
        salary: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender,
        private flight : Flight[] = [],
        private date : date[] = [],
        Category : crewMember
    ){
        super(salary,firstName, lastName, email,phone, gender, Category);
        this.CardID = CardID
        this.flight = []
        this.date = []
    }
    addflight(flight: Flight){
        return this.flight.push(flight);
    }
    addSchedule(schedule: date){
        return this.date.push(schedule)
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