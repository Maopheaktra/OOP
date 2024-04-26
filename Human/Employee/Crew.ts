import { person } from "../Person";

export enum crewMember{
    PILOT,
    CO_PILOT,
    FLGHTATTENDENCE,
}

export class Crew extends person{
    private salary: number = 0; // by default
    constructor(firstName:string, lastName:string){
        super(firstName, lastName);
    }
}