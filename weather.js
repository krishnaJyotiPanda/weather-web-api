const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const button = document.querySelector(".circle");

const getWeather = async (city) => {
  weather.innerHTML = `<div class="spinner-border text-primary role" role="status">
    <span class="sr-only"></span>
  </div>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`;
    return;
  }
  weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});

function getLocation() {
  if (!navigator.geolocation) {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

const co = document.querySelector(".co");
co.addEventListener("onclick", (e) => {
  getLiveWeather();
  e.preventDefault();
});

const getLiveWeather = async () => {
  weather.innerHTML = `<div class="spinner-border text-primary role" role="status">
    <span class="sr-only"></span>
  </div>`;
  const url2 = `https://api.openweathermap.org / data / 2.5 / forecast / daily ? lat = ${navigator.geolocation.coords.latitude} & lon=${navigator.geolocation.coords.longitude}& cnt=14& appid=9d1488a691ad5d93d4ef30c48196686c`;
  const response2 = await fetch(url2);
  const data2 = await response2.json();
  return showLiveWeather(data2);
};

const showLiveWeather = (data2) => {
  console.log(data2);
  // if (data2.cod == "404") {
  //     weather.innerHTML = `<h2> City Not Found <h2>`
  //     return;
  // }
  // weather.innerHTML = `
  //     <div>
  //         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  //     </div>
  //     <div>
  //         <h2>${data2.main.temp} ℃</h2>
  //         <h4> ${data2.weather[0].main} </h4>
  //     </div>
  // `
};
// const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
//     }@2x.png`;
