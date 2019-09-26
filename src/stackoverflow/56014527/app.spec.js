jest.mock('./work', () => jest.fn((req, res, next) => next()));

const supertest = require('supertest');
const app = require('./app');
const work = require('./work');

let agent;
let server;
beforeEach(done => {
  server = app.listen(4000, err => {
    if (err) return done(err);

    agent = supertest(server);
    done();
  });
});

afterEach(done => {
  server && server.close(done);
});

describe('app', () => {
  test('test middleware in app.js', async () => {
    const response = await agent.get('/');
    expect(response.status).toBe(200);
    expect(work).toHaveBeenCalledTimes(1);
  });
});
