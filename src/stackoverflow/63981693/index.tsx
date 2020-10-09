import React, { useEffect, useState } from 'react';
import api from './api';

function Condition(props) {
  const [options, setSuffixOptions] = useState();
  const fetchAsync = async (endpoint) => {
    const result = await api.get(endpoint);
    setSuffixOptions(result.data);
    console.log('result.data', result.data);
  };
  useEffect(() => {
    fetchAsync('http://localhost:3000/api');
  });

  return <div>{options}</div>;
}

export default Condition;
