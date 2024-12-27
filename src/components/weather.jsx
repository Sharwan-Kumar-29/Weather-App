import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '1bd24de7456840c7bc864134242712'; // Replace with your OpenWeatherMap API key

  const getWeather = async () => {
    let city = document.getElementById('input').value;
    city = city ? city : 'London';

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      setWeather(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  let searchTimer;

  function debouncing() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      getWeather();
    }, 2000);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <input
        type="text"
        id="input"
        onChange={debouncing}
        placeholder="Enter city name"
        style={styles.input}
      />

      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {weather && (
        <div style={styles.weatherContainer}>
          <div style={styles.imageContainer}>
            <img
              src={weather.current.condition.icon}
              alt="Weather icon"
              style={styles.weatherIcon}
            />
          </div>
          <div style={styles.contentContainer}>
            <h2>
              {weather.location.name}, {weather.location.country}
            </h2>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Cloud Cover: {weather.current.cloud}%</p>
            <p>Visibility: {weather.current.vis_km} km</p>
            <p>Wind Speed: {weather.current.wind_kph} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
    color: '#333',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  loading: {
    color: '#007BFF',
    fontSize: '18px',
  },
  error: {
    color: 'red',
    fontSize: '18px',
  },
  weatherContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: '1',
    textAlign: 'center',
  },
  contentContainer: {
    flex: '2',
    textAlign: 'left',
    paddingLeft: '20px',
  },
  weatherIcon: {
    width: '150px',
    height: '150px',
  },
};
