import React from 'react';
import { Button } from '../../SubjectBaseStyles';

const TopicDisplay = ({ handleTopicDisplay, isTopicVisible }) => {
  return (
    <div>
      <Button onClick={() => handleTopicDisplay(!isTopicVisible)}>
        {isTopicVisible ? 'Ocultar Tema' : 'Mostrar Tema'}
      </Button>
    </div>
  );
};

export default TopicDisplay;
