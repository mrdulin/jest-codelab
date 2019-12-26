import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <p>Counter value is: {counter}</p>
      <button className="increment" onClick={incCounter}>
        Up
      </button>
    </>
  );
};
export default Counter;
