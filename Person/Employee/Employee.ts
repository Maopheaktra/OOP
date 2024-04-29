import { person } from "../Person";

enum crewMember{
    FLIGHT_ATTENDANCE,
    CABINCREW,
    CHEF,

}
export abstract class Employee extends person {
    private EmployeeID : string;
    private salary: number = 0; //by default
    private wordHour: number
    firstName : string
    lastName : string
    constructor(salary: number, workHour: number, firstName: string, lastName: string){
        super(firstName, lastName);
        this.salary = salary;
        this.wordHour = workHour;
    }
    getPassengerSalary() {
        return this.salary;
    }
}