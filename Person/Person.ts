export abstract class person {
    constructor(protected firstName: string, protected lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName():string{
        return this.firstName + " " + this.lastName;
    }
}