function showWather(respones) {
  let numberInput = document.querySelector("#number");
  let searchCity = document.querySelector("#city");
  searchCity.innerHTML = respones.data.city;

  let descreptionElement = document.querySelector("#description");
  descreptionElement.innerHTML = respones.data.condition.description;

  console.log(respones.data);
  let humidityElemint = document.querySelector("#humidity");
  humidityElemint.innerHTML = `${respones.data.temperature.humidity}%`;

  let windElemint = document.querySelector("#wind");
  windElemint.innerHTML = `${respones.data.wind.speed}km/hr`;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  console.log(respones);
  timeElement.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `img src="${respones.data.condition.icon - url}`;

  let temperature = respones.data.temperature.current;
  numberInput.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let houres = date.getHoures();
  let minutes = date.getMinutes();
  let days = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ];
  let day = days[date.getDay()];

  return `${day} ${houres}:${minutes}`;
}

function searchTown(city) {
  let apikey = "19abto433b3602a6dd0fc334c03ec3cf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric `;
  axios.get(apiUrl).then(showWather);
}

function handelSearch(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input");

  searchTown(searchElement.value);
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", handelSearch);
