const input_name= document.getElementById('input_name');
const log = document.getElementById('values');
const input_restaurant= document.getElementById('input_restaurant');
const restaurant = document.getElementById('value_restaurant');
const input_date = document.getElementById('start');
const date = document.getElementById('value_date');
const order_input = document.getElementById('input_order');
const order = document.getElementById('value_order');

const restaurants = [{
  name: "Angus Steakhouse Oxford Circus",
  image:"https://media-cdn.tripadvisor.com/media/photo-s/0b/31/3f/0b/great-location-just-off.jpg",
  telephone: "5615551212",
  address: "243 Argyll St, Oxford St, London W1D 2LU, United Kingdom",
  description:
    "Steakhouse handy for shoppers, also serving ribs, chicken, fish and veggie dishes plus breakfast.",
},
{
name: "Bybrook Restaurant",
image:
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.ve%2FLocationPhotoDirectLink-g528765-d717914-i287807909-Bybrook_Restaurant_Manor_House_Hotel-Castle_Combe_Cotswolds_England.html&psig=AOvVaw2HCTARD_WsBA2IOrGOQovR&ust=1642788826030000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPjv8LX3wPUCFQAAAAAdAAAAABAD",
telephone: "5905321212",
address: " West St, Castle Combe, Chippenham SN14 7HX, United Kingdom",
description:
  "Soft-lit restaurant and cafe with neutral tones in Georgian building serving seasonal British food.",

},
{
name: "Launceston Place",
image:
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g186338-d719675-Reviews-Launceston_Place-London_England.html&psig=AOvVaw1zJGNkAkAsCJNitxwERlFG&ust=1642789653696000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPCwvMD6wPUCFQAAAAAdAAAAABAD",
telephone: "4305382212",
address: " 1A Launceston Pl, London W8 5RL, United Kingdom",
description:
  "Fine dining restaurant in an 1839 townhouse, with a notable wine list and Modern British menu.",
},
{
name: "Bar 61 Restaurant",
image:
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Finstreatham.com%2Fdirectory%2Fbar-61%2F&psig=AOvVaw0eMUi37IksvJTAIfnrzHr7&ust=1642789934698000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKjml8b7wPUCFQAAAAAdAAAAABAT",
telephone: "378900212",
address: "61A Streatham Hill, London SW2 4TX, United Kingdom",
description:
  "Bar with vintage dark-wood decor and stripped floor, plus Modern European and tapas dining."
}]

input_name.addEventListener('input', updateValueName);

function updateValueName(e) {
  log.textContent = e.target.value;
}

input_restaurant.addEventListener('input', updateValueRestaurant);

function updateValueRestaurant(e) {
  restaurant.textContent = e.target.value;
}
input_date.addEventListener('input', updateValueDate);

function updateValueDate(e) {
  date.textContent = e.target.value;
}

order_input.addEventListener('input', updateValueOrder);

function updateValueOrder(e) {
order.textContent = e.target.value;
}

for(i=0;i<restaurants.length; i++){
  var text = document.getElementsByTagName('img')[i]=`${restaurants[i].image}`;  
  var text = document.getElementsByTagName('h4')[i].innerHTML =`${restaurants[i].description}`;
  }