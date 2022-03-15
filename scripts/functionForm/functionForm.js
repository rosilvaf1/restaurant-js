const inputName = document.getElementById("input_name");
const name = document.getElementById("values");
const restaurant = document.getElementById("value_restaurant");
const inputDate = document.getElementById("start");
const date = document.getElementById("value_date");
const orderInput = document.getElementById("input_order");
const order = document.getElementById("value_order");

//functions that show the changes in the inputs

export default function changesValues() {
  function updateValueName(e) {
    name.textContent = e.target.value;
  }

  inputName.addEventListener("input", updateValueName);

  function val() {
    d = document.getElementById("restaurant").value;
    restaurant.innerHTML = d;
  }

  inputDate.addEventListener("input", updateValueDate);

  function updateValueDate(e) {
    date.textContent = e.target.value;
  }

  orderInput.addEventListener("input", updateValueOrder);

  function updateValueOrder(e) {
    order.textContent = e.target.value;
  }
}
