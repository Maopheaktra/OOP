import { Gender, Person } from "../Person";

export enum crewMember{
    FLIGHT_ATTENDANCE,
    CABINCREW,
    CHEF,

}
// export abstract class Employee extends person {
export abstract class Employee extends Person{
    private salary: number = 0; //by default
    constructor(
        salary: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender
    ){
        super(firstName, lastName, email, phone, gender);
            this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    addSalary(){
        this.salary = this.salary
    }
    
}