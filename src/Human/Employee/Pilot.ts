import { Gender } from "../Person";
import { Employee } from "./employee";
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
        private date : Date[] = []
    ){
        super(salary,firstName, lastName, email,phone, gender);
        this.CardID = CardID
        this.flight = []
        this.date = []
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