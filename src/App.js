// src/MainPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CitySearchModal from './Components/CitySearchModal';
import CurrentWeather from './Components/CurrentTemperature';
import FiveDayForecast from './Components/FiveDayForecast';
import TemperatureToggle from './Components/TemperatureToggle';

const MainPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');
  const [temperatureUnit, setTemperatureUnit] = useState('C'); 
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (city) => {
    try {
      // Load data from the public JSON file
      const response = await axios.get('/data/mockWeatherData.json');
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found or network issue');
    }
  };
  
  

  const handleCitySearch = (newCity) => {
    setCity(newCity);
  };

  const handleUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor:'beige' }}>
      <CitySearchModal onSearch={handleCitySearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData ? (
        <>
          <CurrentWeather data={weatherData.current} unit={temperatureUnit} city={city} />
          <TemperatureToggle
            tempInCelsius={weatherData.current.temp - 273.15}
            onUnitChange={handleUnitChange}
          />
         <FiveDayForecast forecast={weatherData.daily} unit={temperatureUnit} city={city} />

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MainPage;
