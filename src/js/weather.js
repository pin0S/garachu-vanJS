const API_KEY = 'd6af210cd28f70482023562b6d717c59'
const WEATHER_API = 'api.openweathermap.org/data/2.5/weather?'

const weather = document.querySelector('.weather')

function getWeather(coords) {

    fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${
        coords.lon}&appid=${API_KEY}&units=metric`
    )
    .then(response => response.json())
    .then(json => {
        const name = json.name;
        const temperature = json.main.temp;
        weather.innerHTML = `<p>${Math.floor(temperature)}° @ ${name}</p>`;
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords = {
      lat,
      lon
    };
    localStorage.setItem("coords", JSON.stringify(coords));
    getWeather(coords);
}

getLocation()




