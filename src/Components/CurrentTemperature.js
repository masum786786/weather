// src/Components/CurrentWeather.js
import React from 'react';

const CurrentWeather = ({ data, unit, city }) => {
  const tempCelsius = (data.temp - 273.15).toFixed(2);
  const tempFahrenheit = ((tempCelsius * 9) / 5 + 32).toFixed(2);
  const displayTemp = unit === 'C' ? tempCelsius : tempFahrenheit;

  return (
    <div style={{
      fontSize: '1.5em',
      margin: '10px 0',
      color: '#00796B',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '10px' }}>{city}</h2>
      Current Temperature: {displayTemp} °{unit}
    </div>
  );
};

export default CurrentWeather;
