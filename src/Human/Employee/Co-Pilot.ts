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
        this.date = date;
        this.Category = Category
    }
    addflight(flight: Flight){
        return this.flight.push(flight);
    }
    addSchedule(schedule: Date){
        return this.date.push(schedule)
    }
    getPilotId(){
        return this.CardID;
    }
}
