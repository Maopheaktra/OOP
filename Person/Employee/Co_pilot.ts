import { Pilot } from "./Pilot";

export abstract class Co_Pilot extends Pilot {
    private cardID: string
    constructor(cardID: string, salary: number, workHour: number, firstName: string, lastName: string) {
        super(cardID, salary, workHour, firstName, lastName);
        this.cardID = cardID;
    }
    getCardCoPilot(){
        return this.cardID;
    }
}