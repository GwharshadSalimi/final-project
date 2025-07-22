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

  getForcast(respones.data.city);
}

function changTemperature(city) {
  let apiKey = "19abto433b3602a6dd0fc334c03ec3cf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function getForcast(city) {
  let apiKey = "19abto433b3602a6dd0fc334c03ec3cf";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displyForcast);
}

function formatDay(timeStamp) {
  let date = new Date(timeStamp * 1000);
  let days = ["sat", "sun", "mon", "thu", "the"];
  return days[date.getDate()];
}

function displyForcast(respones) {
  console.log(respones.data);

  let forcastHtml = "";

  respones.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forcastHtml =
        forcastHtml +
        ` <div class="weather-forcast-date">
          <div class="weather-forcast-day">${formatDay(day.time)}</div>
          <img src="${day.condition.icon_url}" class="wheather-forcast-icon"/>
          <div class="whather-forcast-temperatures">
            <div class="whather-forcast-temperature"><strong>${Math.round(
              day.temperature.maximum
            )}</strong></div>
            <div class="whather-forcast-temperature">${Math.round(
              day.temperature.minimum
            )}</div>
          </div>
        </div>`;
    }
  });

  let forcastELEMENT = document.querySelector("#forcast");
  forcastELEMENT.innerHTML = forcastHtml;
}

function searchCity(event) {
  event.preventDefault();
  let searchelement = document.querySelector("#search-input");

  changTemperature(searchelement.value);
}

let formElement = document.querySelector(".search-form");
formElement.addEventListener("submit", searchCity);
