import React from 'react';

const WeatherIcon = ({ icon }) => {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="Weather Icon"
      style={{
        width: '100px',
        height: '100px',
        margin: '10px 0'
      }}
    />
  );
};

export default WeatherIcon;
