import React, { useState, useEffect } from 'react';
import { fetchData } from './api';

function App({ id }) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsFetching(true);
    fetchData(id)
      .then(
        (response) => {
          setData(response.data);
          setIsFetching(false);
        },
        (err) => {
          setError(err);
          setIsFetching(false);
        },
      )
      .catch((err) => {
        setError(err);
        setIsFetching(false);
      });
  }, [id]);

  if (data) {
    return <pre>{JSON.stringify(data)}</pre>;
  }
  if (isFetching) {
    return <div>fetching...</div>;
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  return <div>null</div>;
}

export default App;
