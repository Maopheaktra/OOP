import { Gender, Person } from "../Person";

enum crewMember{
    FLIGHT_ATTENDANCE,
    CABINCREW,
    CHEF,

}
// export abstract class Employee extends person {
    export abstract class Employee extends Person{
    private EmployeeID : string;
    private salary: number = 0; //by default
    private wordHour: number
    constructor(salary: number, 
        workHour: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        phone: string, 
        gender:Gender
    ){
        super(firstName, lastName, email, phone,gender);
        this.salary = salary;
        this.wordHour = workHour;
    }
    getPassengerSalary() {
        return this.salary;
    }
}