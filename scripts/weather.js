let weather = {
  apiKey: "3ac0cb74beea84a4b0a67eeb53670887",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  //destructuring the data from the promise
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const city = document.getElementById("weather");
    //create the section with the data
    city.innerHTML = `<p>${name}</p>
    <p id="temperature">${temp}ªC</p>
    <img src ="https://openweathermap.org/img/wn/${icon}.png">`;
  },
};
weather.fetchWeather();
