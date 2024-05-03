import { Gender } from "../Person";
import { Employee } from "./employee";

export enum ROLE {
    CoPilot,
    Pilot
}
export abstract class Pilot extends Employee {
    constructor(
        salary: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender,

    ){
        super (salary,firstName,lastName,email,phone,gender);
    }
}