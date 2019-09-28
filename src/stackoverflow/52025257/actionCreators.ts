import followApi from './followApi';

export const handleFavorite = data => {
  return dispatch => {
    return followApi.handleFavorite(data).then(
      payload => {
        dispatch({ type: 'HANDLE_FAVORITE_SUCCESS', payload });
      },
      err => {
        dispatch({ type: 'ERROR', payload: err });
      }
    );
  };
};
