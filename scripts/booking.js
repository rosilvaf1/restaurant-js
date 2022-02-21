const input_name = document.getElementById("input_name");
const log = document.getElementById("values");
const input_restaurant = document.getElementById("input_restaurant");
const restaurant = document.getElementById("value_restaurant");
const input_date = document.getElementById("start");
const date = document.getElementById("value_date");
const order_input = document.getElementById("input_order");
const order = document.getElementById("value_order");
const arr = [];
const restaurants = [
  {
    name: "Angus Steakhouse Oxford Circus",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/31/3f/0b/great-location-just-off.jpg",
    telephone: "5615551212",
    address: "243 Argyll St, Oxford St, London W1D 2LU, United Kingdom",
    description:
      "Steakhouse handy for shoppers, also serving ribs, chicken, fish and veggie dishes plus breakfast.",
    reservation: "4",
  },
  {
    name: "Bybrook Restaurant",
    image:
      "https://www.turningleftforless.com/wp-content/uploads/2016/12/IMG_1722-2-1024x768.jpg",
    telephone: "5905321212",
    address: " West St, Castle Combe, Chippenham SN14 7HX, United Kingdom",
    description:
      "Soft-lit restaurant and cafe with neutral tones in Georgian building serving seasonal British food.",
    reservation: "8",
  },
  {
    name: "Launceston Place",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJESg0RhWfNqIpotWjbN6qoMrBtni97pg2vtVWM1db8BSbGwuncKQsa8CbrVkRVdp3VM&usqp=CAU",
    telephone: "4305382212",
    address: " 1A Launceston Pl, London W8 5RL, United Kingdom",
    description:
      "Fine dining restaurant in an 1839 townhouse, with a notable wine list and Modern British menu.",
    reservation: "7",
  },
  {
    name: "Bar 61 Restaurant",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/2b/65/de/ort-cafe.jpg",
    telephone: "378900212",
    address: "61A Streatham Hill, London SW2 4TX, United Kingdom",
    description:
      "Bar with vintage dark-wood decor and stripped floor, plus Modern European and tapas dining.",
    reservation: "0",
  },
  {
    name: "Ekte Nordic Kitchen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrsNqpcc_2G42e1Sq7k6SvYoTmaOH439U51GUrPVhjdjJphs0JDvHuPYXR9kKde6qma0&usqp=CAU",
    telephone: "658758484",
    address: " 2 -8 Bloomberg Arcade, London EC4N 8AR, United Kingdom",
    description:
      "All-day café with wine & a focus on Nordic cuisine in a light-filled space with contemporary decor.",
    reservation: "10",
  },
  {
    name: "Wiltons Restaurant",
    image:
      "https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/10/andy-hayler-wiltons-outside-w709-h532-664x442-c-center.jpg",
    telephone: "4298472947",
    address: "55 Jermyn St, St. James's, London SW1Y 6LX, United Kingdom",
    description:
      "Bastion of Britishness serving fine dining classics including game and seafood, plus oyster bar.",
    reservation: "3",
  },
];
input_name.addEventListener("input", updateValueName);

function updateValueName(e) {
  log.textContent = e.target.value;
}

input_restaurant.addEventListener("input", updateValueRestaurant);

function updateValueRestaurant(e) {
  restaurant.textContent = e.target.value;
  arr.push(restaurant.textContent);
}

input_date.addEventListener("input", updateValueDate);

function updateValueDate(e) {
  date.textContent = e.target.value;
}

order_input.addEventListener("input", updateValueOrder);

function updateValueOrder(e) {
  order.textContent = e.target.value;
}

function createCards() {
  for (i = 0; i < restaurants.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    document.getElementById("group-cards").appendChild(div);
    const title = document.createElement("h1");
    title.innerHTML = `${restaurants[i].name}`;
    const text = document.createElement("p");
    text.innerHTML = `${restaurants[i].description}`;
    const img = document.createElement("img");
    img.setAttribute("src", `${restaurants[i].image}`);
    const legend = document.createElement("h4");
    legend.setAttribute('id',  `legend_${restaurants[i].name}`)
    legend.innerHTML = `reservations: ${restaurants[i].reservation} `;
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(img);
    div.appendChild(legend);
  }
}


createCards();


const form = document.forms[0];
form.addEventListener("submit", createReservation);

function createReservation(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries(); // array of entries
  const data = Object.fromEntries(entries);
  const restaurant = data.restaurant;
  getReservation(restaurant);
}

let getReservation = (restaurant) => {
  const restaurantsRervation = restaurants.find(item => 
    item.name == restaurant
  );
  const numberReservations = Number(restaurantsRervation.reservation) 
  restaurantsRervation.reservation =  numberReservations +1;
  document.getElementById(`legend_${restaurantsRervation.name}`).innerHTML=`reservations:${restaurantsRervation.reservation}`;
  closeReservation(restaurantsRervation);
};

let closeReservation = (restaurantsRervation) =>{
  const totalReservation = 10;
  if(restaurantsRervation.reservation>totalReservation){console.log('hi')}
  delete(restaurantsRervation);
  console.log(restaurants)
}

setTimeout(() => {
  alert("Hi, here you can book a site");
}, 20);
