import React, { useState } from "react";
import "./App.css";

const API_KEY = "YOUR_API_KEY_HERE"; // ← Replace this with your OpenWeatherMap API key

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Enter city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {weather && (
        <div className="weather">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
  );
}

export default App;
