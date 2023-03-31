const apiKEY = "YourKEY";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-section input");
const searchBtn = document.querySelector(".search-section button");
const weatherImage = document.querySelector(".weather-img");

async function checkWeather(city) {
  if (city != "") {
    const response = await fetch(apiURL + city + `&appid=${apiKEY}`);
    let data = await response.json();
        if (response.status === 404) {
          document.querySelector(".error p").style.display = "block";
          document.querySelector(".lower-part").style.display = "none";
        } else {
          document.querySelector(".temp-city-section p").textContent = data.name;
          document.querySelector(".temp-city-section h2").textContent =
            Math.floor(data.main.temp) + "°C";
          document.querySelector(".humidity").textContent =
            data.main.humidity + " %";
          document.querySelector(".windspeed").textContent =
            data.wind.speed + " km/h";

          if (data.weather[0].main === "Clouds") {
            weatherImage.src = "Images/clouds.png";
          } else if (data.weather[0].main === "Clear") {
            weatherImage.src = "Images/clear.png";
          } else if (data.weather[0].main === "Clear") {
            weatherImage.src = "Images/clear.png";
          } else if (data.weather[0].main === "Rain") {
            weatherImage.src = "Images/rain.png";
          } else if (data.weather[0].main === "Drizzle") {
            weatherImage.src = "Images/drizzle.png";
          } else if (data.weather[0].main === "Mist") {
            weatherImage.src = "Images/mist.png";
          }
          document.querySelector(".error p").style.display = "none";
          document.querySelector(".lower-part").style.display = "block";
        }
  } else {
    alert("Please Enter City Name");
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
