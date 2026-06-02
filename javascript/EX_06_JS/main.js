let events = [];

events.push("Music Event");
events.push("Workshop");
events.push("Music Concert");

let musicEvents = events.filter(event =>
    event.includes("Music")
);

console.log(musicEvents);

let cards = events.map(event =>
    `Event Card: ${event}`
);

console.log(cards);