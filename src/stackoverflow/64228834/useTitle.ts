import { useDispatch } from 'react-redux';

const SET_APP_TITLE = 'SET_APP_TITLE';

export const useTitle = (title: string) => {
  const dispatch = useDispatch();
  return dispatch({ type: SET_APP_TITLE, title });
};
