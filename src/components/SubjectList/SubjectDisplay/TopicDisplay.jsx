import React from 'react';

const TopicDisplay = ({ handleTopicDisplay, isTopicVisible }) => {
  return (
    <div>
      <button onClick={() => handleTopicDisplay(!isTopicVisible)}>
        {isTopicVisible ? 'Ocultar Tema' : 'Mostrar Tema'}
      </button>
    </div>
  );
};

export default TopicDisplay;
