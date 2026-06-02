document.getElementById("registerForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let form = event.target;

    let name = form.elements["username"].value;
    let email = form.elements["email"].value;

    if(name === "" || email === "") {
        document.getElementById("error").innerHTML =
        "All fields are required";
        return;
    }

    alert("Registration Successful");
});