import React from 'react';

const IdDisplay = ({ handleIdDisplay, isIdVisible }) => {
  return (
    <div>
      <button onClick={() => handleIdDisplay(!isIdVisible)}>
        {isIdVisible ? 'Ocultar ID' : 'Mostrar ID'}
      </button>
    </div>
  );
};

export default IdDisplay;
