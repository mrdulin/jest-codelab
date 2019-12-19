const request = require('supertest');
const server = require('./server');

describe('auth middleware', () => {
  const exec = () => {
    return request(server)
      .post('/api/categories')
      .set('x-auth-token', 'token')
      .send({ name: 'category1' });
  };
  it('should return 200 if token is valid', async () => {
    const res = await exec();
    expect(res.status).toBe(200);
  });
});
