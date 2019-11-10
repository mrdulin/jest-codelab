import React from 'react';

export const Comp = ({ onHandle }: any) => {
  const ref = React.useRef(null);

  const handleClick = () => {
    if (!ref.current) return;

    onHandle();
  };

  return (
    <button ref={ref} onClick={handleClick}>
      test
    </button>
  );
};
