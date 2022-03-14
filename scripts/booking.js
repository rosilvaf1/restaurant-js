import changesValues from "./functionForm/functionForm.js";
import bookingAlert from "./modals/modals.js";
import restaurants from "../data/data.js";

//import function changevalues
changesValues();
//create create Restaurant
class Restaurant {
  constructor(name, description, reservation, image) {
    this.name = name;
    this.description = description;
    this.reservation = reservation;
    this.image = image;
  }
//create method createCards
  createCards() {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    document.getElementById("group-cards").appendChild(div);
    div.innerHTML = `<h1>${this.name}</h1>
    <p>${this.description}</p>
    <img src ="${this.image}">
    <h4 id ="legend_${this.name}">Reservations: ${this.reservation}</h4>`;
  }
}
//loop a array of restaurant to create cards of restaurants using the method createCards
for (let i = 0; i < restaurants.length; i++) {
  let restaurant = restaurants[i];
  const new_restaurant = new Restaurant(
    restaurant.name,
    restaurant.description,
    restaurant.reservation,
    restaurant.image
  );
  new_restaurant.createCards();
}

const form = document.forms[0];

//get data of the form in order to modificated the amount of reservation of the selected restaurant
form.addEventListener("submit", createReservation);
function createReservation(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries(); // array of entries
  const data = Object.fromEntries(entries);
  getReservation(data);
}
//funtion to modificate the amount showed in the card of restaurant
const getReservation = (data) => {
  const restaurant = data.restaurant;
  const restaurantsRervation = restaurants.find(
    (item) => item.name == restaurant
  );
  const totalReservation = 10;
  const numberReservations = Number(restaurantsRervation.reservation);
  restaurantsRervation.reservation = numberReservations + 1;
  //if the reservations are more than 10 reservations, show an alert that says that there is no vancancy, else, reserve and change the number in the card
  if (restaurantsRervation.reservation > totalReservation) {
    alert("No vacancy in this restaurant");
  } else {
    data.reservation = restaurantsRervation;
    document.getElementById(
      `legend_${restaurantsRervation.name}`
    ).innerHTML = `Reservations:${restaurantsRervation.reservation}`;
  }
};

bookingAlert();
