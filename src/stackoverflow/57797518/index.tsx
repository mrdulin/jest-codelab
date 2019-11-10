import React, { useEffect } from 'react';

const Compo = ({ funcA }) => {
  useEffect(() => {
    window.addEventListener('x', funcB, false);

    return () => {
      window.removeEventListener('x', funcB, false);
    };
  }, []);

  const funcB = () => {
    funcA();
  };

  return <button onClick={funcB} />;
};

export default Compo;
