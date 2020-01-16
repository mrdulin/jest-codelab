import throttle from 'lodash/throttle';
import React from 'react';

export function Button({ action }) {
  const throttledEvent = throttle(action, 1000, { leading: true, trailing: false });

  function handlePress() {
    console.count('handlePress');
    throttledEvent();
  }

  return (
    <button onClick={handlePress} data-testid="button">
      Button
    </button>
  );
}
