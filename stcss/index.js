function showWather(respones) {
  let numberInput = document.querySelector("#number");
  let searchCity = document.querySelector("#city");
  searchCity.innerHTML = respones.data.city;

  let temperature = respones.data.temperature.current;
  numberInput.innerHTML = Math.round(temperature);
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
