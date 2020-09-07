import createGlobalStore from './';
import { createStore, applyMiddleware } from 'redux';

jest.mock('redux');

describe('63369776', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', () => {
    const mockTestValue = 1;
    createStore.mockReturnValueOnce(mockTestValue);
    applyMiddleware.mockReturnValueOnce('store enhancer');
    expect(createGlobalStore([])).toBe(mockTestValue);
    expect(createStore).toBeCalledWith(expect.any(Function), 'store enhancer');
    expect(applyMiddleware).toBeCalledWith(...[]);
  });
});
