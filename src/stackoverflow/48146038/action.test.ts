import { someAction } from './action';
import { createBrowserHistory, History } from 'history';

jest.mock('history', () => {
  const mHistory = ({ push: jest.fn() } as any) as History;
  return {
    createBrowserHistory: jest.fn(() => mHistory),
  };
});
const mCreateBrowserHistory = createBrowserHistory as jest.MockedFunction<typeof createBrowserHistory>;

describe('48146038', () => {
  it('should pass', () => {
    const mHistory = mCreateBrowserHistory();
    const actual = someAction();
    expect(actual).toEqual({ type: 'NAVIGATE_HOME' });
    expect(createBrowserHistory).toBeCalledTimes(2);
    expect(mHistory.push).toBeCalledWith('/home');
  });
});
