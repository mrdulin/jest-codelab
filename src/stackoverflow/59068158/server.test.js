const request = require('supertest');
const app = require('./server');

describe('59068158', () => {
  const mystring = 'kashdjkasddavsdnbmavdjshgdjsagdj';

  it('/myservice/v1/api/user(POST) should return user', (done) => {
    request(app)
      .post('/myservice/v1/api/user')
      .set({
        'Content-Type': 'text/plain',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Length': Buffer.byteLength(mystring),
        Connection: 'keep-alive',
      })
      .send(mystring)
      .expect(201)
      .expect('user created successfully.', done);
  });
});
