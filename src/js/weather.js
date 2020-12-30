// old keys for open weather API
//const API_KEY = 'b1331f0e98b8183090e37fa33c9990fd' 
//const WEATHER_API = 'api.openweathermap.org/data/2.5/weather?'

const weather = document.querySelector('.weather-container')

function getWeather(coords) {

    fetch(
    `https://fcc-weather-api.glitch.me/api/current?lat=${coords.lat}&lon=${coords.lon}`
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const name = data.name;
        const temperature = data.main.temp;
        weather.innerHTML = `<p>${Math.floor(temperature)}° @ ${name}</p>`;
    })
    .catch( rejected => {
        console.log(rejected);
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