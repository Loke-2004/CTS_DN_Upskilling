function registerEvent() {
    alert("Registration Successful");
}

function filterCategory() {
    let category = document.getElementById("category").value;
    console.log("Selected:", category);
}

document.getElementById("search").addEventListener("keydown", function (event) {
    console.log("Key Pressed:", event.key);
});