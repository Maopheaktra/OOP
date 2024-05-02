import { Gender } from "../Person";
import { crewMember, Employee } from "./employee";

class FLIGHT_ATTENDANCE extends Employee{
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