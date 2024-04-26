import { person } from "../Person";

export abstract class Employee extends person{
    private salary: number = 0; //by default
    private wordHour: number
    firstName : string
    lastName : string
    constructor(salary: number, workHour: number, firstName: string, lastName: string){
        super(firstName, lastName);
        this.salary = salary;
        this.wordHour = workHour;
    }
    getPassengerSalary(){
        return this.salary;
    }
}