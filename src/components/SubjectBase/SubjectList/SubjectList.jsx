import React, { useState, useEffect } from 'react';
import SubjectItem from './SubjectItem';
import SubjectSearch from './SubjectSearch';
import IdDisplay from './SubjectDisplay/IdDisplay';
import TopicDisplay from './SubjectDisplay/TopicDisplay';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isIdVisible, setIsIdVisible] = useState(false);
  const [isTopicVisible, setIsTopicVisible] = useState(false);

  useEffect(() => {
    const getSubjects = async () => {
      //Simulo que le pido asíncronamente al backend
      const data = await require('../../../subjects.json');
      setSubjects(data);
    };

    getSubjects();
  }, []);

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
                subject={subject}
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
