import firebase from './firebase';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: { user } });
export const loginError = error => ({ type: LOGIN_ERROR, payload: error, error: true });

export const onLogin = ({ email, password }) => async dispatch => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    console.error(error);
    dispatch(loginError(error));
  }
};
