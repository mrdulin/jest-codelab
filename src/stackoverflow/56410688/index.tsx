import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DisplayData = ({ query, onQueryChange }) => {
  const [data, setData] = useState<any>({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setData(result.data);
    };
    if (!!query) fetchData();
  }, [query]);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
