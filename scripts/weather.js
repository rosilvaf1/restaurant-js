let weather = {
  apiKey: "3ac0cb74beea84a4b0a67eeb53670887",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" +
        this.apiKey
    ).then(response => response.json())
    .then(data => this.displayWeather(data));
  
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.getElementById('weather').innerHTML = name;
  },
};
