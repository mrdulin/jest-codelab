import React, { useReducer, useEffect } from 'react';
import { listReducer, fetchList } from './reducer';

export const Posts = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    fetchList(dispatch);
  }, []);

  return (
    <ul>
      {list.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};
