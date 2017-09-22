import { BG_LOAD_START, BG_LOAD_SUCCESS, BG_LOAD_FAILURE } from './types';
import axios from 'axios';

export const bgLoad = (url, pictureNumber = 0) => {
  return dispatch => {
    dispatch(bgLoadStart());

    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })
      .then(res => dispatch(bgLoadSuccess(res.data.photos[pictureNumber], res.data.name, res.data.url)))
      .catch(err => dispatch(bgLoadFailure(err)));
  };
};

const bgLoadStart = () => {
  return {
    type: BG_LOAD_START
  };
};

const bgLoadSuccess = (bgImage, name, url) => {
  return {
    type: BG_LOAD_SUCCESS,
    payload: {
      bgImage,
      name,
      url
    }
  };
};

const bgLoadFailure = error => {
  return {
    type: BG_LOAD_FAILURE,
    payload: {
      ...error
    }
  };
};
