// src/App.js
import React, { useState } from 'react';
import './App.css';

const API_KEY = 'YOUR_API_KEY_HERE'; // 🔁 Replace with your OpenWeatherMap API key

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!query) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      alert('City not found');
      setWeather(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
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
