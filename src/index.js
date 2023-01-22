//Date

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayWeek = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayWeek];

  return `${day} ${hours}:${minutes}`;
}
let li = document.querySelector("#date");
let currentTime = new Date();
li.innerHTML = formatDate(currentTime);

//deccription api
function displayWeather(response) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let spanTemperature = document.querySelector("temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let liDescription = document.querySelector("#description");
  liDescription.innerHTML = response.data.weather[0].description;
  let liHumidity = document.querySelector("#humid");
  liHumidity.innerHTML = response.data.main.humidity;
  let liWind = document.querySelector("#windi");
  liWind.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}

function searchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#type-city").value;
  let apiKey = "830dc77e57fb6a652a14c00f66be12a9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmit);

///

function showPosition(position) {
  let apiKey = "830dc77e57fb6a652a14c00f66be12a9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);
