import React from 'react';

const SampleComponent = () => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef(null);

  const handleClickOutside = event => {
    if (!(ref.current as any).contains(event.target)) {
      setState(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div id="sample-div" ref={ref}>
      {`State value is: ${state}`}
    </div>
  );
};

export default SampleComponent;
