import { handleDelete } from './';

describe('64803187', () => {
  it('should pass', () => {
    const action = {
      id: '1',
      type: 'user',
      actions: {
        dispatch: jest.fn(),
        openDialog: jest.fn().mockImplementationOnce((type, dialog, options) => {
          options.onSuccess();
          return { type: 'OPEN_DIALOG' };
        }),
        notify: jest.fn(),
        thunk: jest.fn().mockReturnValueOnce({ type: 'DELETE_USER_SUCCESS' }),
      },
    };
    handleDelete(action);
    expect(action.actions.dispatch).toBeCalledWith({ type: 'OPEN_DIALOG' });
    expect(action.actions.openDialog).toBeCalledWith('deleteuser', 'Dialog', {
      onSuccess: expect.any(Function),
      body: `Are you sure you want to delete this user?`,
      title: `Delete user`,
      confirm: 'Delete',
      cancel: 'Cancel',
      danger: true,
    });
    expect(action.actions.dispatch).toBeCalledWith({ type: 'DELETE_USER_SUCCESS' });
    expect(action.actions.notify).toBeCalledWith('user deleted', { variant: 'success' });
  });
});
