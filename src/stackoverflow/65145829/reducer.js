import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const background = handleActions(
  {
    [actions.changeBackgroundType](state, { payload: { type } }) {
      return { ...state, type };
    },
    [actions.addGradientStart](state, { payload: { color } }) {
      return { ...state, color1: color };
    },
    [actions.addGradientEnd](state, { payload: { color } }) {
      return { ...state, color2: color };
    },
  },
  { type: 'none', color1: '#ffffff', color2: '#ffffff' },
);

const url = handleActions(
  {
    [actions.addUrl](state, { payload: { url: newUrl } }) {
      return newUrl;
    },
  },
  '',
);

export default combineReducers({
  background,
  url,
});
