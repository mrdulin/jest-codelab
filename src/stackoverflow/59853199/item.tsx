import React from 'react';

export default function Item(props) {
  return (
    <div>
      <div
        onClick={() => {
          props.onClick();
        }}
      >
        {props.name}
      </div>
    </div>
  );
}
