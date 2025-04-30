/*Add a weather component to the home page of the website using React JS*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('Hyderabad');
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '9a6508ea2a12f0a637105cd0eb81dabe'; 

  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setError('');
    } catch (err) {
      setError('City not found. Please check the spelling.');
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setError('Please enter a city name.');
      return;
    }
    setCity(input.trim());
    fetchWeather(input.trim());
    setInput('');
  };

  return (
    <div style={styles.card}>
      <h2>🌦 Weather Widget</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city (e.g. Mumbai)"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      {error && <p style={styles.error}>{error}</p>}

      {weather && (
        <div style={styles.info}>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p style={{ textTransform: 'capitalize' }}>{weather.weather[0].description}</p>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    margin: '2rem auto',
    padding: '2rem',
    maxWidth: '380px',
    width: '90%',
    background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
    borderRadius: '20px',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1 1 60%',
    padding: '0.6rem 0.8rem',
    borderRadius: '12px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none',
    minWidth: '150px',
  },
  button: {
    padding: '0.6rem 1rem',
    backgroundColor: '#ff7e5f',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s ease',
  },
  info: {
    marginTop: '1rem',
    lineHeight: '1.8',
    fontSize: '1.1rem',
  },
  error: {
    color: '#ffdddd',
    backgroundColor: 'rgba(255,0,0,0.3)',
    borderRadius: '8px',
    padding: '0.5rem',
    marginTop: '0.5rem',
  }
};

export default Weather;
/*App.js*/
/*import React from 'react';
import Weather from './Weather';

function App() {
  const appStyle = {
    textAlign: 'center',         
    padding: '20px',          
    fontFamily: 'Arial, sans-serif', 
  };

  return (
    <div className="App" style={appStyle}>
      <h1>Welcome to the Homepage</h1>
      <Weather />
    </div>
  );
}

export default App; */
