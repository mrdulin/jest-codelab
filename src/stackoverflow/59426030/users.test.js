const request = require('superagent');
const app = require('./app');

const port = 3000;
process.env.API_URL = `http://localhost:${port}`;
const get = async (url) => request.get(`${process.env.API_URL}${url}`);

jest.mock('./token-store', () => ({
  getToken: jest.fn().mockReturnValue('token'),
}));

describe('endpoint', () => {
  let server;
  beforeAll((done) => {
    server = app.listen(port, () => {
      console.info(`HTTP server is listening on http://localhost:${server.address().port}`);
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('GET', async () => {
    const { status, text } = await get('/api/users');
    expect(status).toEqual(200);
    expect(text).toBe('token');
  });
});
