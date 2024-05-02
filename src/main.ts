// Import the employees the passenger
import { Airlines } from "./Airline/airline";
import { Aeroplanes } from "./Airline/Aeroplane/aeroplane";
import { Seat } from "./Airline/Aeroplane/seat";
<<<<<<< HEAD


=======
>>>>>>> 8232b904492b103eb9e4b765e2bb023a0a9ead1b
import { Flight } from "./BookingFlight/Flight/flight";
import { Employee } from "./Human/Employee/employee";
import { Passenger } from "./Human/Passenger/Passenger";
import { Gender } from "./Human/Person";
import { Booking } from "./BookingFlight/Booking/booking";

// add seat
let seat1 = new Seat("1ph")

let Aeroplane1 = new Aeroplanes("PHN");
Aeroplane1.addSeat(seat1);
let PM_Airline = new Airlines("PM_Airline");
PM_Airline.addAeroplane(Aeroplane1);

console.log(PM_Airline);

let passenger1 = new Passenger("001", "Pheaktra", "Mao", "pheaktra2004@gmail.com","094567823", Gender.Female);
console.log(passenger1);
