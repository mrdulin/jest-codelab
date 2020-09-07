import React from 'react';
import io from 'socket.io-client';

const Join = () => {
  let socket;
  const ENDPOINT = 'localhost:5000';

  const join = () => {
    socket = io(ENDPOINT);
    socket.emit('join', { name: 'Paola', room: '1' }, () => {});
  };

  return (
    <div className="join-container">
      <a className="join-button" onClick={join}>
        Sign in
      </a>
    </div>
  );
};

export default Join;
