// src/Components/ForecastCard.js
import React from 'react';

const ForecastCard = ({ data, unit }) => {
  const tempHigh = (data.temp.max - 273.15).toFixed(2);
  const tempLow = (data.temp.min - 273.15).toFixed(2);
  const displayHigh = unit === 'C' ? tempHigh : ((tempHigh * 9) / 5 + 32).toFixed(2);
  const displayLow = unit === 'C' ? tempLow : ((tempLow * 9) / 5 + 32).toFixed(2);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      margin: '5px'
    }}>
      <h3>{new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
      <p>{`High: ${displayHigh} °${unit}`}</p>
      <p>{`Low: ${displayLow} °${unit}`}</p>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather icon" />
    </div>
  );
};

export default ForecastCard;
