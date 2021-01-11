const weather = document.querySelector('.weather-container')

const localCoords = []
const icons = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Clear', 'Mist', 'Clouds']

function getWeather(coords) {
    fetch(
    `https://fcc-weather-api.glitch.me/api/current?lat=${coords.lat}&lon=${coords.lon}`
    )
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const temperature = data.main.temp;
        const type = data.weather[0].main;
        weather.innerHTML = `<p>${type} in ${name}, ${Math.floor(temperature)}°</p>`;
    })
    .catch( rejected => {
        console.log(rejected);
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        alert("Geolocation is not supported by this browser, not able to show your local weather");
    }
}

function showLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords = {
        lat,
        lon
    };
    mirrorToLocalStorage(coords)
    getWeather(coords);
}

function mirrorToLocalStorage(coords) {
    localStorage.setItem("coords", JSON.stringify(coords));
}

getLocation()