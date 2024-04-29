import { Employee } from "./Employee";

enum Role{
    Pilot,
    Co_Pilot
}
export class Pilot extends Employee {
    private CardID : string;
    constructor (CardID: string, salary: number, workHour: number, firstName: string, lastName: string,email: string, phone: number){
        super(salary, workHour, firstName, lastName,email, phone)
        this.CardID = CardID;
    }
    getCardID(){
        return this.CardID;
    }
}