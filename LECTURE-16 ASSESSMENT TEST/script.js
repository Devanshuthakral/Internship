document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weatherForm");
    const cityInput = document.getElementById("cityInput");
    const errorMsg = document.getElementById("errorMsg");

    const weatherResult = document.getElementById("weatherResult");
    const locationEl = document.getElementById("location");
    const descriptionEl = document.getElementById("description");
    const temperatureEl = document.getElementById("temperature");
    const humidityEl = document.getElementById("humidity");
    const windEl = document.getElementById("wind");

    const API_KEY = 'cf73d38d029b5b594a52f8399a2f992f';

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const city = cityInput.value.trim();

        if (city === "") {
            errorMsg.textContent = "Please enter a city name.";
            weatherResult.style.display = "none";
            return;
        }

        errorMsg.textContent = "Loading...";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => {
                if (!res.ok) throw new Error("City not found");
                return res.json();
            })
            .then(data => {
                errorMsg.textContent = "";
                locationEl.textContent = `${data.name}, ${data.sys.country}`;
                descriptionEl.textContent = `Weather: ${data.weather[0].description}`;
                temperatureEl.textContent = `Temperature: ${data.main.temp}°C`;
                humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
                windEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                weatherResult.style.display = "block";
            })
            .catch(err => {
                errorMsg.textContent = err.message;
                weatherResult.style.display = "none";
            });
    });
});
