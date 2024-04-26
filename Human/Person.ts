export enum Gender{
    Male,
    Female
}

export abstract class Person{
    protected firstName: string;
    protected lastName: string;
    protected email: string;
    protected phone: number;
    constructor(firstName: string, lastName: string, email: string, phone: number){
      
    }
    getName(): string{
        return this.firstName + " " + this.lastName;
    }
    
}

