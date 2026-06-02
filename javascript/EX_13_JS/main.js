document.getElementById("form")
.addEventListener("submit", function(event){

    event.preventDefault();

    console.log("Form Submitted");

    let name =
    document.getElementById("name").value;

    debugger;

    console.log("Name:", name);

    let payload = {
        username: name
    };

    console.log("Payload:", payload);
});