import React from 'react';

const SampleComponent = () => {
  const sampleMethod = () => {
    console.log('hello world');
  };

  return (
    <button onClick={sampleMethod} type="button">
      Click Me
    </button>
  );
};

export default SampleComponent;
