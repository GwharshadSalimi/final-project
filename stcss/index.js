function refreshWeather(respones) {
  let numberElement = document.querySelector("#number");
  let temperature = respones.data.temperature.current;
  let h1Element = document.querySelector("#city");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");

  humidityElement.innerHTML = `${respones.data.temperature.humidity}%`;
  windElement.innerHTML = `${respones.data.wind.speed}km/hr`;
  h1Element.innerHTML = respones.data.city;
  numberElement.innerHTML = Math.round(temperature);
}

function changTemperature(city) {
  let apiKey = "19abto433b3602a6dd0fc334c03ec3cf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchCity(event) {
  event.preventDefault();
  let searchelement = document.querySelector("#search-input");

  changTemperature(searchelement.value);
}

let formElement = document.querySelector(".search-form");
formElement.addEventListener("submit", searchCity);
