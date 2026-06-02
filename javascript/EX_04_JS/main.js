let events = [];

function addEvent(name) {
    events.push(name);
}

function registerUser(user, event) {
    console.log(user + " registered for " + event);
}

function filterEventsByCategory(category, callback) {
    callback(category);
}

addEvent("Music Event");

registerUser("Lokesh", "Music Event");

filterEventsByCategory("Music", function (cat) {
    console.log("Category:", cat);
});

function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = registrationCounter();

console.log(counter());
console.log(counter());