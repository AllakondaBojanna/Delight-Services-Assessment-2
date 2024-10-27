import React from 'react';

interface NameListProps {
  names: string[];
}

const NameList: React.FC<NameListProps> = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;
