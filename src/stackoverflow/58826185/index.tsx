import React, { useState } from 'react';

const View = ({ children }) => <div>{children}</div>;
const CustomComponent = ({ onChange }) => <input onChange={e => onChange(e.target.value)}></input>;

export const Component: React.FC<{}> = () => {
  const [value, setState] = useState('');
  console.log(value);
  return (
    <View>
      <CustomComponent onChange={val => setState(val)} />
    </View>
  );
};
