import React from 'react';
import ForecastCard from './ForecastCard';

const FiveDayForecast = ({ forecast, unit, city }) => {
  
  return (
    
    <div style={{
      textAlign: 'center',
      margin: '20px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    }}>
      <h2 style={{
        marginBottom: '10px',
        color: '#343a40',
        fontSize: '24px',
      }}>
        5-Day Forecast for {city}
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap', // Allow cards to wrap on smaller screens
        margin: '0 -10px', // Adjust margins for better spacing
      }}>
        
        {forecast.slice(0, 5).map((day, index) => (
          
          <div key={index} style={{
            flex: '1 1 18%', // Responsive flex for cards
            margin: '10px',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
          }}>
            <ForecastCard data={day} unit={unit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
