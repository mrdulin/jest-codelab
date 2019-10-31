import React, { RefObject } from 'react';
import { useRef } from 'react';

export function TextInputWithFocusButton() {
  const inputEl: RefObject<HTMLInputElement> = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    (inputEl.current as HTMLInputElement).focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
