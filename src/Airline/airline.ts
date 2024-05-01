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
   
}


