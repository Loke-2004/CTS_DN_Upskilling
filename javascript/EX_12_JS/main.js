function submitData() {

    document.getElementById("message").innerHTML =
    "Submitting...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Lokesh",
                event: "Music Fest"
            })

        })

        .then(response => response.json())

        .then(data => {

            document.getElementById("message").innerHTML =
            "Registration Successful";

            console.log(data);
        })

        .catch(error => {

            document.getElementById("message").innerHTML =
            "Registration Failed";

            console.log(error);
        });

    }, 2000);
}