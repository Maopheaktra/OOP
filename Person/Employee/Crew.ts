import { FlyAttendant } from "./FlyAttendant";

export class Crew extends FlyAttendant{
    crewMemberID: string;
    constructor(crewMemberID: string) {
        super();
        this.crewMemberID =crewMemberID;
    }
}