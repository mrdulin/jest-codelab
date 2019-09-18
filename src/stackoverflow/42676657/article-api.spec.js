jest.mock('node-fetch');

const fetch = require('node-fetch');
const { articleMiddleware } = require('./article-api');

describe('articleMiddleware', () => {
  it('t1', async () => {
    fetch.mockResolvedValueOnce({});
    const next = jest.fn();
    await articleMiddleware(next);
    expect(fetch).toBeCalledWith('https://github.com/mrdulin', { headers: {}, method: 'get', body: {} });
    expect(next).toBeCalledWith({ some: 'data' });
  });
});
