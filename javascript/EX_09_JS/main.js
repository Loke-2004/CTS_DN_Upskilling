function loadEvents() {

    document.getElementById("status").innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("status").innerHTML = "Data Loaded";
        })
        .catch(error => console.log(error));
}

async function getEvents() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getEvents();