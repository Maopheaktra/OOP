// Import the employees the passenger
import { Airlines } from "./src/Airline/airline";
import { Aeroplanes } from "./src/Airline/Aeroplane/aeroplane";
import { Seat } from "./src/Airline/Aeroplane/seat";



import { Passenger } from "./src/Human/Passenger/Passenger";
import { Gender } from "./src/Human/Person";






// add seat
let seat1 = new Seat("1ph")

let Aeroplane1 = new Aeroplanes("PHN");
Aeroplane1.addSeat(seat1);
let PM_Airline = new Airlines("PM_Airline");
PM_Airline.addAeroplane(Aeroplane1);

console.log(PM_Airline);

let passenger1 = new Passenger("001", "Pheaktra", "Mao", "pheaktra2004@gmail.com","094567823", Gender.Female);
console.log(passenger1);
