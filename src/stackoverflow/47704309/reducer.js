import * as Actions from './actions';

export function commonReducer(state, action) {
  switch (action.type) {
    case Actions.CANCEL_EDITS:
      return window.location.reload();
    default:
      return state;
  }
}
