const eventName = "Music Festival";
const eventDate = "10-Jun-2026";

let seats = 50;

let details = `Event: ${eventName}, Date: ${eventDate}, Seats: ${seats}`;

document.getElementById("info").innerHTML = details;

seats++; // Registration
console.log("Seats after update:", seats);