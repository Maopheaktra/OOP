import { Gender, Person } from "../Person";
export class Passenger extends Person {
    private passengerID: string;
    constructor(
        passengerID: string, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender
    ) {
        super(firstName, lastName, email, phone, gender)
        this.passengerID = passengerID;
        
    }
}


