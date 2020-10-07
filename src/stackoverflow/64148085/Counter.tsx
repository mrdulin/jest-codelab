import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleClick} id="button">
        increment
      </button>
    </div>
  );
};
