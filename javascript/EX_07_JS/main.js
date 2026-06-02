const container = document.querySelector("#container");

const card = document.createElement("div");

card.innerHTML = "Music Festival";

container.appendChild(card);

function register() {
    card.innerHTML = "Registered Successfully";
}