const invokeMe = require('./');
const { MyClient } = require('./some-service');

jest.mock('./some-service', () => {
  const mMyClient = { invoke: jest.fn() };
  return { MyClient: jest.fn(() => mMyClient) };
});

describe('60008679', () => {
  it('should invoke', async () => {
    const client = new MyClient();
    client.invoke.mockResolvedValueOnce('fake response');
    const actual = await invokeMe('a', 'b');
    expect(actual).toBe('fake response');
    expect(MyClient).toBeCalledWith({ name: 'my-name' });
    expect(client.invoke).toBeCalledWith({ input1: 'a', input2: 'b' });
  });

  it('should handle error', async () => {
    const client = new MyClient();
    const mError = new Error('some error');
    client.invoke.mockRejectedValueOnce(mError);
    await expect(invokeMe('a', 'b')).rejects.toThrowError(mError);
    expect(MyClient).toBeCalledWith({ name: 'my-name' });
    expect(client.invoke).toBeCalledWith({ input1: 'a', input2: 'b' });
  });
});
