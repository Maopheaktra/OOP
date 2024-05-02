import { Meal } from "../Flight/meal";
import { Baggages } from "./bagages";
import { Departure } from "../../Departure/Departure";
import { Passenger } from "../../Human/Passenger/Passenger";
import { Flight } from "../Flight/flight";
export enum TypeTickets{
    return_Ticket,
    single_Ticket,
}

export class Booking{
    private bookingID: string;
    private bookingReference: string;
    private bookingFlight: string;
    private passengers: Passenger;
    private departurePlace: Departure;
    private typeTickets: TypeTickets; 
    private baggages: Baggages;
    private meals: Meal;
    private flights: Flight[]=[]
    bag: Baggages;

    constructor(bookingID:string, bookingReference:string, bookingFlight:string, passengers: Passenger, departurePlace: Departure, typeTickets:TypeTickets, baggages: Baggages, meal: Meal){
        this.bookingID = bookingID
        this.bookingReference = bookingReference
        this.bookingFlight = bookingFlight
        this.passengers = passengers
        this.departurePlace = departurePlace
        this.typeTickets = typeTickets
        this.baggages = baggages
        this.meals = meal
        
    }
    
    getBookingID(){
        return this.bookingID;
    }

    getPassenger(){
        return this.passengers;
    }

    getReturnTicket(){
        return this.typeTickets;
    }

    getMeal(meals: Meal){
        return this.meals
    }

    getGateFromFlight(){
        let gateFlight =[]
        for(let flight of this.flights)
    }

    setBaggage(bag:Baggages){
        this.bag=bag
    }

    setTypeTickets(newTypeTickets:TypeTickets){
        this.typeTickets = newTypeTickets;
    }


}

