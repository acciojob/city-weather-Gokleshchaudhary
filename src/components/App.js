import React, { useState } from "react";
import "./App.css"; // optional for styling

const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!query) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather({
          name: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      } else {
        setWeather(null);
        alert("City not found.");
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
      alert("Error fetching weather.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="app">
      <h1>City Weather</h1>

      <input
        type="text"
        className="search"
        placeholder="Enter city name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {weather && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <img src={weather.icon} alt={weather.description} />
          <p>{weather.temp}°C</p>
          <p>{weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
