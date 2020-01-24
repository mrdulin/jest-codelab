import React from 'react';

const Comp = ({ onChange }) => (
  <form>
    <input type="text" placeholder="username" onChange={(e) => onChange(e)} />
  </form>
);

export default Comp;
