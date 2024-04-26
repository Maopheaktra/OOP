import { Person } from "../Person";
import { Gender } from "../Person";
export class Passenger extends Person {
    private passengerID: string;
    constructor(passengerID: string, firstName: string, lastName: string, email: string, phone: number, gender: Gender) {
        super(firstName, lastName, email, phone)
        this.passengerID = passengerID;
        gender:Gender
    }
}

