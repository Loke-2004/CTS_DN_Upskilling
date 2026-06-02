const events = [
    { name: "Music Show", seats: 20 },
    { name: "Workshop", seats: 0 },
    { name: "Sports Meet", seats: 15 }
];

events.forEach(event => {
    if (event.seats > 0) {
        document.getElementById("events").innerHTML +=
            `<li>${event.name}</li>`;
    }
});

try {
    let seats = 0;
    
    if (seats <= 0) {
        throw "No seats available!";
    }

} catch (error) {
    console.log(error);
}