document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim();
  const output = document.getElementById("output");
  
  if (!city) {
    output.textContent = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=9af28294619944a5a64190128250101&q=${city}&aqi=no`
    );

    if (!response.ok) {
      throw new Error("City not found.");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
});

function displayWeather(data) {
  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = `
     <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
    <p><strong>Region:</strong> ${data.location.region}</p>
    <p><strong>Local Time:</strong> ${data.location.localtime}</p>
    <hr>
    <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" />
    <p><strong>Feels Like:</strong> ${data.current.feelslike_c}°C</p>
    <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
    <p><strong>Wind Direction:</strong> ${data.current.wind_dir}</p>
    <p><strong>Pressure:</strong> ${data.current.pressure_mb} mb</p>
    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
    <p><strong>Cloud Cover:</strong> ${data.current.cloud}%</p>
    <p><strong>UV Index:</strong> ${data.current.uv}</p>
    <p><strong>Visibility:</strong> ${data.current.vis_km} km</p>
  `;
}
