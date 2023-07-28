// API key and endpoint
const API_KEY = "d4fb3556b1ab3fa0f2dac6160a24f8b9";
const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const latitude = 52.0167;
const longitude = 4.7083;

document.addEventListener("DOMContentLoaded", () => {

// Function to fetch weather data from the API 
async function getWeatherData() {
    try {
        const response = await fetch ("${weatherEndpoint}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}")
        if (!response.ok) {
            throw new Error("Weather data not available");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}

// Function to update the HTML with the weather data
async function updateWeatherInfo() {
    const weatherInfo = document.getElementById("weather-info");
    const weatherData = await getWeatherData();
    const {name, main, weather} = weatherData;
    const temperature = (main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celcius
    const description = weather[0].description;
    
    // Create HTML content to display weather information
    const htmlContent = 
    `<h2>${name}</h2><p>${description}</p><p>Temperature: ${temperature}°C</p>`;

    // Update the weather info div with the weather information
    weatherInfo.innerHTML = htmlContent;
}

// Call the updateWeatherInfo function to display weather data on page load 
updateWeatherInfo();
})