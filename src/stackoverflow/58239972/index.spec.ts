import notifications from './';
import Vue from './Vue';

jest.mock('./Vue.ts');

describe('Notifications tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('successNotification should set title to title and text to text ', () => {
    Vue.notify = jest.fn().mockReturnValueOnce({});
    const title = 'test';
    const text = 'test';

    notifications.successNotification(title, text);
    expect(Vue.notify).toBeCalledWith({
      group: 'max-fordham',
      type: 'success',
      title,
      text
    });
  });
});
