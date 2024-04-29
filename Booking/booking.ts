import { Meal } from "./meal";
import { Baggages } from "./bagages";
import { Departure } from "../Departure/Departure";

export enum TypeTickets{
    return_Ticket,
    single_Ticket,
}

export class Booking{
    private bookingID: string;
    private bookingReference: string;
    private bookingFlight: string;
    private typeTickets: TypeTickets;
    constructor(bookingID:string, bookingReference:string, bookingFlight:string, typeTickets:TypeTickets){
        this.bookingID = bookingID
        this.bookingReference = bookingReference
        this.bookingFlight = bookingFlight
        this.typeTickets = typeTickets
    }
    getBookingID(){
        return this.bookingID;
    }

}

