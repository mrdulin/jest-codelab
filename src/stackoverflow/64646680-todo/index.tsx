import React, { useRef, useEffect } from 'react';

export const SomeComponent = () => {
  const divRef = useRef(null);

  useEffect(() => {
    console.log((divRef.current as any).addEventListener);
    (divRef.current as any).addEventListener('mousedown', mouseDownFunc);
  }, []);

  const mouseDownFunc = () => {
    document.addEventListener('mousemove', (el) => {
      // call some parent function
    });
  };

  return <div data-testid="test-div" className="test-div" ref={divRef}></div>;
};
