import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; 
import Cities from '../Components/Cities'; // Importing city array

const CitySearchModal = ({ onSearch }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCitySelect = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  const handleSearch = () => {
    if (selectedCity) {
      onSearch(selectedCity); // Pass selected city name to fetch weather data
      setShowModal(false);  // Close modal after selection
    }
  };

  return (
    <>
      <button 
        onClick={() => setShowModal(true)} 
        style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          marginBottom: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaSearch style={{ marginRight: '5px' }} /> Search City
      </button>

      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '320px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <label htmlFor="citySelect" style={{ marginBottom: '10px', display: 'block' }}>
              Select a City:
            </label>
            <select
              id="citySelect"
              value={selectedCity}
              onChange={handleCitySelect}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '100%',
                borderRadius: '5px',
                marginBottom: '10px',
                fontSize: '16px',
              }}
            >
              <option value="">Select a city...</option>
              {Cities.map((cityObj, index) => (
                <option key={index} value={cityObj.city}>
                  {cityObj.city}
                </option>
              ))}
            </select>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button 
                onClick={handleSearch} 
                style={{
                  backgroundColor: '#007BFF',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                disabled={!selectedCity} // Disable button if no city is selected
              >
                <FaSearch style={{ marginRight: '5px' }} /> Search
              </button>
              <button 
                onClick={() => setShowModal(false)} 
                style={{
                  color: 'red',
                  padding: '10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                }}
              >
                <FaTimes style={{ marginRight: '5px' }} /> Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CitySearchModal;
