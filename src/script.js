//date
let now = new Date();

let days = [    
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuesday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hour = now.getHours();

let minute = now.getMinutes();

//let dateFormat = `${day} ${hour}:${minute}`;

let currentDate = document.querySelector("#current-time");
currentDate.innerHTML = `${day} ${hour}:${minute}`;

//City weather
function cityWeather(response){
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

//city name
function submitCity(event) {
  event.preventDefault();
  let apiKey = "6bf9818d9ac6ad65c210c2c0a7205a25";
  let cityId = document.querySelector("#city-input").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(cityWeather);
}

let chooseCity = document.querySelector("#search-city");
chooseCity.addEventListener("submit", submitCity);

function searchLocation(position) {
  let apiKey = "6bf9818d9ac6ad65c210c2c0a7205a25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(submitCity);

}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

//C/F
function convertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 12;
}

function convertFsmth(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 54;
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertCelsius);

let fahrenheitLink = document.querySelector("#fsmth");
fahrenheitLink.addEventListener("click", convertFsmth);

let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", currentLocation);