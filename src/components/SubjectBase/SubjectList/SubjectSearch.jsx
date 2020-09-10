import React from 'react';
import { Input } from '../SubjectBaseStyles';

const SubjectSearch = ({ handleSearch }) => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Buscar..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SubjectSearch;
