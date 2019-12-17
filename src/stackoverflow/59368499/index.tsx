import React, { useEffect, useState } from 'react';

export const MyComponent = () => {
  const [cntCode, setCntCode] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((res) => res.json())
      .then((data) => {
        setCntCode(data.countryCode);
        setCountry(data.country);
      });
  }, [cntCode, country]);

  return (
    <div>
      country: {country}, cntCode: {cntCode}
    </div>
  );
};
