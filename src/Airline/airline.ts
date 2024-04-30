import { Aeroplanes } from "./Aeroplane/aeroplane";
import { Employee } from "../Human/Employee/employee";
import { Booking } from "../BookingFlight/Booking/booking";
import { Flight } from "../BookingFlight/Flight/flight";
export class Airlines{
    private name: string
    private airplane: Aeroplanes[] = []
    private employee: Employee[] = []
    private bookingFlight: Booking[] = []
    private flight : Flight[] = []
    constructor(name: string){
        this.name = name
   }
   addAeroplane(airplane: Aeroplanes): void {
     this.airplane.push(airplane);
 }

 // Method to add an employee to the airline
 addEmployee(employee: Employee): void {
     this.employee.push(employee);
 }

 // Method to book a flight for a passenger
 bookFlight(flight: Flight, booking: Booking): void {
     // Assuming flight and booking are valid and not already booked
     this.flight.push(flight);
     this.bookingFlight.push(booking);
 }

 // Method to retrieve all flights of the airline
 getFlights(): Flight[] {
     return this.flight;
 }

 // Method to retrieve all bookings made with the airline
 getBookings(): Booking[] {
     return this.bookingFlight;
 }

 // Other methods for managing the airline's operations can be added here
 // For example, methods to manage employees, check available flights, etc.

}


