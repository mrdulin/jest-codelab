import { getUser } from './api_59735993';
import React, { useState, useEffect } from 'react';

function useFetch() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUser();
      setData(response);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading };
}

const App = () => {
  const { data, isLoading } = useFetch();

  return (
    <div>
      {isLoading && <div data-testid="loading">loading...</div>}
      {!isLoading && (
        <div data-testid="resolved">Name: {data.results ? data.results[0].name.first : 'default name'}</div>
      )}
    </div>
  );
};
export default App;
