const input_name = document.getElementById("input_name");
const name = document.getElementById("values");
const restaurant = document.getElementById("value_restaurant");
const input_date = document.getElementById("start");
const date = document.getElementById("value_date");
const order_input = document.getElementById("input_order");
const order = document.getElementById("value_order");

export default function changesValues() {
  function updateValueName(e) {
    name.textContent = e.target.value;
  }

  input_name.addEventListener("input", updateValueName);

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
}
