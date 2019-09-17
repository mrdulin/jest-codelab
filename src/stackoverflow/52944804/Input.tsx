import React from 'react';

export const Input = ({ onChange, placeholder, name, value }) => {
  return <input placeholder={placeholder} name={name} value={value} onChange={onChange}></input>;
};
