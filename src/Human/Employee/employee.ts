import { Gender, Person } from "../Person";

export enum crewMember{
    FLIGHT_ATTENDANCE,
    CABINCREW,
    CHEF,

}
// export abstract class Employee extends person {
export abstract class Employee extends Person{
    private EmployeeID : string;
    private salary: number = 0; //by default
    private workHour: number
    constructor(
        EmployeeID : string,
        salary: number, 
        workHour: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender
    ){
        super(firstName, lastName, email, phone, gender);
            this.EmployeeID = EmployeeID;
            this.salary = salary;
            this.workHour = workHour;
    }
    getSalary() {
        return this.salary;
    }
    addSalary(){
        this.salary = this.salary
    }
}