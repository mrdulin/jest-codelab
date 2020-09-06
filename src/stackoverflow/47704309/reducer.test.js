import { commonReducer } from './reducer';
import * as Actions from './actions';

describe('47704309', () => {
  it('should handle CANCEL_EDITS', () => {
    const state = {};
    const action = { type: Actions.CANCEL_EDITS };
    const mReload = jest.fn();
    window.location.reload = mReload;
    expect(commonReducer(state, action)).toEqual(undefined);
    expect(mReload).toBeCalledTimes(1);
  });

  it('should handle default case', () => {
    const state = {};
    const action = { type: '' };
    expect(commonReducer(state, action)).toEqual({});
  });
});
