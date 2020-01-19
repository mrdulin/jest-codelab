import * as actions from './actions';
import * as api from './api';

describe('test', () => {
  it('dispatches success notification if promise2 returns a resolved promise', async () => {
    const promise1Spy = jest.spyOn(api, 'promise1').mockImplementation(() => Promise.resolve({ abc: 'efg' }));
    const promise2Spy = jest.spyOn(api, 'promise2').mockResolvedValueOnce('fake promise2 data');
    const showNotification = jest.spyOn(actions, 'showNotification');
    const dispatch = jest.fn();

    await actions.someAction(1)(dispatch);

    expect(promise1Spy).toBeCalledWith(1);
    expect(promise2Spy).toBeCalledWith('efg');
    expect(showNotification).toHaveBeenCalledWith({
      type: 'success',
    });
    expect(dispatch).toBeCalledWith({ type: 'success', payload: {} });
  });
});
