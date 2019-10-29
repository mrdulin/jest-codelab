import { add } from './';

describe('add', () => {
  test('thunk', async () => {
    const mJson = jest.fn().mockResolvedValueOnce({ results: { name: 'elsa' } });
    window.fetch = jest.fn().mockResolvedValueOnce({ json: mJson });
    const dispatch = jest.fn();
    await add()(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'ADD', people: { name: 'elsa' } });
  });
});
