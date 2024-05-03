// Import the employees the passenger
import { Airlines } from "./Airline/airline";
import { Aeroplanes } from "./Airline/Aeroplane/aeroplane";
import { Seat } from "./Airline/Aeroplane/seat";
<<<<<<< HEAD
=======


>>>>>>> Employee
import { Flight } from "./BookingFlight/Flight/flight";
import { Booking } from "./BookingFlight/Booking/booking";
<<<<<<< HEAD
import { Departure } from "./Departure/Departure";
import { Gender } from "./Human/Person";
import { Passenger } from "./Human/Passenger/Passenger";
import { Employee } from "./Human/Employee/employee";
import { Pilot } from "./Human/Employee/Pilot";
import { CoPilot } from "./Human/Employee/Co-Pilot";
import { Gate } from "./Airport/Gate";
import { Route } from "./Airport/route";
// Create Departure----------
let departure1 = new Departure("Camboia","PP");
let arrival1 = new Departure("Camboia","Siem reap");
// Create Airline+++++++++++++++
let airline1 = new Airlines("PNC airline");
=======
>>>>>>> Employee


<<<<<<< HEAD
// Create Seat+++++++++
let seat1 = new Seat("12");
let seat2 = new Seat("15");
let seat3 = new Seat("126");
let seat4 = new Seat("13");
// Create Gate---------------
let Gate1 = new Gate("1");
let Gate2 = new Gate("2");
// Create Pilote-----------------
let Pilot1 = new Pilot("")
// Create aeroplan+++++++++
let aeroplan1 = new Aeroplanes("PHN");
=======
let Aeroplane1 = new Aeroplanes("PHN");
Aeroplane1.addSeat(seat1);
let PM_Airline = new Airlines("PM_Airline");
// PM_Airline.addAeroplan(Aeroplane1);
>>>>>>> Employee


// Create passenger ---------------
let passenger = new Passenger("003", "Pheaktra", "Mao", "pheaktra@gmail.com", "098765123", Gender.Female);

// Add seat to aeroplan
aeroplan1.addSeat(seat1);

airline1.addAeroplane(aeroplan1);
console.log(aeroplan1)