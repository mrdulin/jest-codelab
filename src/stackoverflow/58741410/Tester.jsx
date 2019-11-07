import AuthService from './AuthService';
import React, { useState, useEffect } from 'react';

export default () => {
  const Auth = new AuthService();
  const [thing, setThing] = useState('');
  useEffect(() => {
    console.count('useEffect');
    Auth.fetch('url').then(data => {
      setThing(data);
    });
  }, []);
  return <p>{thing}</p>;
};
