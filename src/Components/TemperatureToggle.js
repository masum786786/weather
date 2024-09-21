import React, { useState } from 'react';

const TemperatureToggle = ({ tempInCelsius, onUnitChange }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
    onUnitChange(isCelsius ? 'F' : 'C');
  };

  return (
    <button
    onClick={toggleUnit}
    style={{
      backgroundColor: '#3B82F6',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.25rem', 
      padding: '0.75rem 1.5rem', 
      marginTop: '1rem',
      borderRadius: '0.5rem', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      transition: 'background-color 0.3s, transform 0.3s', 
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#2563EB'; 
      e.currentTarget.style.transform = 'scale(1.05)'; 
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#3B82F6'; 
      e.currentTarget.style.transform = 'scale(1)'; 
    }}
  >
    {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
  </button>
  

  );
};

export default TemperatureToggle;
