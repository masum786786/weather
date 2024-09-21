import React from 'react';

const WeatherCondition = ({ condition }) => {
  return (
    <div style={{
      fontSize: '1.2em',
      margin: '10px 0',
      color: '#004D40',
      textAlign: 'center'
    }}>
      {condition}
    </div>
  );
};

export default WeatherCondition;
