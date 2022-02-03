/*const {AngusCircus} = require('../data/data')*/
const AngusCircus = {
    name: "Angus Steakhouse Oxford Circus",
    image:
      "https://static.standard.co.uk/2021/03/11/12/Angus20Steakhouse.jpg?width=1200&width=1200&auto=webp&quality=75",
    telephone: "5615551212",
    address: "243 Argyll St, Oxford St, London W1D 2LU, United Kingdom",
    description:
      "Steakhouse handy for shoppers, also serving ribs, chicken, fish and veggie dishes plus breakfast.",
  };

console.log(`${AngusCircus.address}`)
delete AngusCircus.address;
console.log(AngusCircus)
var p = document.getElementsByTagName("p")[0].innerHTML = "Hello World!";
var text = document.getElementsByTagName('p')[3].innerHTML =`${AngusCircus.description}`;
console.log(AngusCircus.description)
