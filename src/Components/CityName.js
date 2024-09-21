import React from 'react';

const CityName = ({ name }) => {
  return (
    <h1 style={{
      fontSize: '2em',
      margin: '10px 0',
      color: '#00695C',
      textAlign: 'center'
    }}>
      {name}
    </h1>
  );
};

export default CityName;
