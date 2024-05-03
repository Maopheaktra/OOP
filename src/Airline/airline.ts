import { Aeroplanes } from "./Aeroplane/aeroplane";
import { Employee } from "../Human/Employee/employee";
import { Flight } from "../BookingFlight/Flight/flight";
import { Booking } from "../BookingFlight/Booking/booking";
export class Airlines{
    private name: string
    private airplane: Aeroplanes[] = []
    private employee: Employee[] = []
    private flight : Flight[] = []
    private booking: Booking[] = []
    constructor(name: string){
        this.name = name
   }
<<<<<<< HEAD
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
 findEmployeeSalary(){
    let EmployeeSalary =  0
    for(let employee of this.employee){
        EmployeeSalary += employee.getSalary()
    }
    return EmployeeSalary
 }
=======
>>>>>>> Employee

   
   addAeroplan(aeroplane:Aeroplanes){
    return this.airplane.push(aeroplane)
   }
   addEmployee(employee: Employee){
    return this.employee.push(employee)
   }
   addBooking(booking: Booking){
    return this.booking.push(booking)
   }
   addFlight(flight: Flight){
       this.flight.push(flight)
    }
    getBooking(booking:Booking){
     this.booking.push(booking)
    }
   getEmployee(employee: Employee){
    this.employee.push(employee)
   }
   getFlight(flight: Flight){
    this.flight.push(flight)
   }
   findReturnTicket(){
    let numberOfPassenger = 0;
        for(let bookingTicket of this.booking){
            if(bookingTicket.getReturnTickets() == 0){
                numberOfPassenger +=1
            }
        }
        return numberOfPassenger
   }
}


