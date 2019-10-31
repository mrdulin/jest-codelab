import React, { RefObject } from 'react';
import { useRef } from 'react';

export const Component = props => {
  const thisComponent: RefObject<HTMLDivElement> = useRef(null);
  const otherFunction = ({ current, previousSibling }) => {
    if (previousSibling) return previousSibling.focus();
    if (!previousSibling && current) return current.focus();
  };
  const handleFocus = () => {
    const { current } = thisComponent;
    const previousSibling = current ? current.previousSibling : null;
    otherFunction({ current, previousSibling });
  };
  return (
    <div ref={thisComponent} onFocus={handleFocus}>
      Stuff In here
    </div>
  );
};
