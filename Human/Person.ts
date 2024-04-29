export enum Gender{
    Male,
    Female
}

export abstract class Person{
    protected firstName: string;
    protected lastName: string;
    protected email: string;
    protected phone: string;
    protected gender: Gender
    constructor(firstName: string, lastName: string, email: string, phone: string, gender:Gender){
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.phone = phone
      this.gender = gender
    }
    getName(): string{
        return this.firstName + " " + this.lastName;
    }
    
}

