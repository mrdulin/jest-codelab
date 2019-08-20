import { actions } from './';

actions.$axios = {
  $get: jest.fn()
};

describe('actions', () => {
  it('should mock action.$axios.$get method', () => {
    expect(jest.isMockFunction(actions.$axios.$get)).toBeTruthy();
  });
  it('should get data correctly', async () => {
    (actions.$axios.$get as jest.Mock<any, any>).mockResolvedValueOnce({ userId: 1 });
    const actualValue = await actions.submitPhoneNumber({});
    expect(actualValue).toEqual({ userId: 1 });
    expect(actions.$axios.$get).toBeCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  });
});
