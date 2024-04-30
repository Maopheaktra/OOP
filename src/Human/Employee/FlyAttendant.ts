import { Gender } from "../Person";
import { crewMember, Employee } from "./employee";

class FLIGHT_ATTENDANCE extends Employee{
    constructor(
        EmployeeID:string, 
        salary: number, 
        workHour: number,
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender,

    ){
        super (EmployeeID,salary,workHour,firstName,lastName,email,phone,gender);
    }
}