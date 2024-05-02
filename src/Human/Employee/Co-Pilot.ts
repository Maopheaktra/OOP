import { Gender } from "../Person";
import { crewMember,Employee } from "./employee";
import { Flight } from "../../BookingFlight/Flight/flight";
import { date } from "../../Date-time/date";
 
export class CoPilot extends Employee {
    constructor(
        private CardID : string,
        salary: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender,
        private date: Date[] = [],
        private flight : Flight[] = [],
        Category: crewMember

    ){
        super(salary,firstName,lastName,email,phone,gender,Category);
        this.CardID = CardID;
        this.date = date;
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
