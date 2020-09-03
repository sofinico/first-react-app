import React, { useState } from 'react';
import SubjectItem from './SubjectItem';
import SubjectSearch from './SubjectSearch';
import IdDisplay from './SubjectDisplay/IdDisplay';
import TopicDisplay from './SubjectDisplay/TopicDisplay';

import subjects from '../../subjects.json';

const SubjectList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isIdVisible, setIsIdVisible] = useState(false);
  const [isTopicVisible, setIsTopicVisible] = useState(false);

  return (
    <div>
      <h4>Lista completa de materias de la carrera</h4>
      <SubjectSearch handleSearch={setSearchValue} />
      <IdDisplay handleIdDisplay={setIsIdVisible} isIdVisible={isIdVisible} />
      <TopicDisplay
        handleTopicDisplay={setIsTopicVisible}
        isTopicVisible={isTopicVisible}
      />
      <ul>
        {subjects.map((subject) => {
          if (subject.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return (
              <SubjectItem
                key={subject._id}
                name={subject.name}
                id={subject._id}
                topic={subject.topic}
                showId={isIdVisible}
                showTopic={isTopicVisible}
              />
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default SubjectList;
