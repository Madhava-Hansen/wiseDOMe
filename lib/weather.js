var autocomplete;

document.addEventListener("DOMContentLoaded", () => {
 let options = {
  types: ['(cities)'],
 };
   let input = document.getElementById('autocomplete');
   autocomplete = new google.maps.places.Autocomplete(input, options);

   let submit = document.getElementById("search-button");
   submit.addEventListener("click", searchSubmit);
});

function searchSubmit(e) {
  e.preventDefault();
  let address = autocomplete.getPlace();
  let cityName = address.address_components[0].long_name;
  requestWeather(cityName);
}

function requestWeather(city) {
  let inputObject = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    success: completedSuccessfully,
    error: requestErrors,
    data: { q: city, APPID: "d870581228ff719b22b6b72c5003ed57" }
  }

  window.$w.ajax(inputObject);
}

function completedSuccessfully(weatherString) {
  let weatherObj = JSON.parse(weatherString);
  temperature = Math.round(((weatherObj.main.temp) - 228.35));
  let weather = weatherObj.weather[0].main.toLowerCase();
  let day = weatherObj.weather[0].icon.split("").pop() === "d";
  debugger;

  descriptionConditional(weather, day);
}

function descriptionConditional(description, day) {
  let image = document.getElementById("weather-icon");

  if (description ===  "clear sky" || description === "clear") {
       image.src = day ?  "./assets/images/if_sun.png" : "./assets/images/if_moon.png";
   } else if (description === "few clouds") {
       image.src = "./assets/images/";
   } else if (description === "scattered clouds" || description === "broken clouds" || description === "clouds") {
       image.src = "./assets/images/";
   } else if (description === "rain" || description === "light rain" || description === "shower rain") {
       image.src = "./assets/images/";
   } else if (description === "thunderstorm") {
       image.src = "./assets/images/";
   } else if (description === "snow") {
       image.src = "./assets/images/";
   } else if (description === "mist") {
       image.src = "./assets/images/";
   } else {
       image.src = "./assets/images/if_sun.png";
   }
}

function createDateTimeObj(int) {
  let dateObj = new Date(0);
  dateObj.setUTCSeconds(int);

  return dateObj;
}

function requestErrors(errors) {
  debugger;
}
