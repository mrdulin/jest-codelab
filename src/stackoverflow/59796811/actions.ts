import { promise1, promise2 } from './api';

export const showNotification = (action) => {
  return {
    ...action,
    payload: {},
  };
};

export const someAction = (id) => (dispatch) => {
  return promise1(id)
    .then((result1) => {
      return result1.abc;
    })
    .then((result2) =>
      promise2(result2)
        .then((result3) => {
          dispatch(showNotification({ type: 'success' }));
        })
        .catch((err) => {
          dispatch(showNotification({ type: 'timeout' }));
          throw new Error(err);
        }),
    )
    .catch((err) => {
      dispatch(dispatch(showNotification({ type: 'failed' })));
    });
};
