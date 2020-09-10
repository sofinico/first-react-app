import React from 'react';
import { Button } from '../../SubjectBaseStyles';

const IdDisplay = ({ handleIdDisplay, isIdVisible }) => {
  return (
    <div>
      <Button onClick={() => handleIdDisplay(!isIdVisible)}>
        {isIdVisible ? 'Ocultar ID' : 'Mostrar ID'}
      </Button>
    </div>
  );
};

export default IdDisplay;
