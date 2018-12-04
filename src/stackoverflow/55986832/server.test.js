import request from 'supertest';
import start from './server';

describe('Test the root path', () => {
  let server;
  beforeAll(async () => {
    server = await start();
  });
  afterAll((done) => {
    server.close(done);
  });

  test('GET method returns status code 200', () => {
    expect.assertions(1);
    return request(server)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
