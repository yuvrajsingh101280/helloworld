// src/components/Square.js
import React from 'react';

const Square = ({ particles, owner, onClick }) => {
  const color = owner === 1 ? 'red' : owner === 2 ? 'blue' : 'grey';

  return (
    <div
      onClick={onClick}
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        border: '1px solid black',
      }}
    >
      {particles}
    </div>
  );
};

export default Square;

