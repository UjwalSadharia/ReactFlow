import React from 'react';
import ForeignKey from './ForeignKey';

const Field = ({ field }) => {
  return (
    <div className="field">
      <span>{field.name}</span>
      <span>{field.type}</span>
      {field.foreignKey && <ForeignKey field={field.foreignKey} />}
    </div>
  );
};

export default Field;
