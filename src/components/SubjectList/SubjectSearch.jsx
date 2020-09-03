import React from 'react';

const SubjectSearch = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SubjectSearch;
