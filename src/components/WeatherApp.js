// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = 'your_openweather_api_key'; // 🔁 Replace this with your actual API key
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>City Weather</h1>
      <input
        type="text"
        className="search" // ✅ required for Cypress
        placeholder="Enter city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {weather && (
        <div className="weather"> {/* ✅ required for Cypress */}
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default App;

