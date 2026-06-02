const events = [
{
    name: "Music Fest",
    date: "10-06-2026"
}
];

function showEvent(eventName = "Unknown Event") {
    return eventName;
}

const { name, date } = events[0];

const copiedEvents = [...events];

document.getElementById("output").innerHTML =
`
<p>Default Parameter: ${showEvent()}</p>
<p>Event Name: ${name}</p>
<p>Event Date: ${date}</p>
<p>Copied Events: ${JSON.stringify(copiedEvents)}</p>