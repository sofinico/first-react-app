import React from 'react';

const SubjectItem = ({ subject: { name, id, topic }, showId, showTopic }) => {
  if (showId && showTopic)
    return (
      <li>
        {id} - {name}: {topic}
      </li>
    );
  else if (showId)
    return (
      <li>
        {id} - {name}
      </li>
    );
  else if (showTopic)
    return (
      <li>
        {name}: {topic}
      </li>
    );
  return <li>{name}</li>;
};

export default SubjectItem;
