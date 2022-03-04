const input_name = document.getElementById("input_name");
const log = document.getElementById("values");
const input_restaurant = document.getElementById("input_restaurant");
const restaurant = document.getElementById("value_restaurant");
const input_date = document.getElementById("start");
const date = document.getElementById("value_date");
const order_input = document.getElementById("input_order");
const order = document.getElementById("value_order");

import { bookingAlert } from "./modals/modals";
import { restaurants } from "../data/data";

console.log(restaurants)

//refactorizacion de funciones
//ver babel / require
//ver vh

input_name.addEventListener("input", updateValueName);

function updateValueName(e) {
  log.textContent = e.target.value;
}

function val() {
  d = document.getElementById("restaurant").value;
  restaurant.innerHTML = d;
}

input_date.addEventListener("input", updateValueDate);

function updateValueDate(e) {
  date.textContent = e.target.value;
}

order_input.addEventListener("input", updateValueOrder);

function updateValueOrder(e) {
  order.textContent = e.target.value;
}

class Restaurant {
  constructor(name, description, reservation, image) {
    this.name = name;
    this.description = description;
    this.reservation = reservation;
    this.image = image;
  }

  createCards() {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    document.getElementById("group-cards").appendChild(div);
    div.innerHTML = `<h1>${this.name}</h1>
    <p>${this.description}</p>
    <img src ="${this.image}">
    <h4 id ="legend_${this.name}">reservations: ${this.reservation}</h4>`;
  }
}

for (i = 0; i < restaurants.length; i++) {
  let restaurant = restaurants[i];
  const new_restaurant = new Restaurant(
    restaurant.name,
    restaurant.description,
    restaurant.reservation,
    restaurant.image
  );
  new_restaurant.createCards();
}

//objeto. atributo
//objeto['atributo']

const form = document.forms[0];
form.addEventListener("submit", createReservation);

function createReservation(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries(); // array of entries
  const data = Object.fromEntries(entries);
  getReservation(data);
  console.log(data);
}

const getReservation = (data) => {
  const restaurant = data.restaurant;
  const restaurantsRervation = restaurants.find(
    (item) => item.name == restaurant
  );
  const totalReservation = 10;
  const numberReservations = Number(restaurantsRervation.reservation);
  restaurantsRervation.reservation = numberReservations + 1;
  if (restaurantsRervation.reservation > totalReservation) {
    alert("No vacancy in this restaurant");
  } else {
    data.reservation = restaurantsRervation;
    document.getElementById(
      `legend_${restaurantsRervation.name}`
    ).innerHTML = `reservations:${restaurantsRervation.reservation}`;
    console.log(restaurants);
  }
};

bookingAlert();
