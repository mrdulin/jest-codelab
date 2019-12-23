import React from 'react';
import { useHistory } from 'react-router-dom';

const RouteNotFound = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/help')} />
    </div>
  );
};

export default RouteNotFound;
