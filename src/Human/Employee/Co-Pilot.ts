import { Gender } from "../Person";
import { Pilot } from "./Pilot";

class CoPilot extends Pilot{
    constructor(
        EmployeeID:string, 
        salary: number, 
        workHour: number,
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender

    ){
        super (EmployeeID,salary,workHour,firstName,lastName,email,phone,gender);
    }
}