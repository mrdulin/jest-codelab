import app from './app';
import request from 'supertest';
import * as moduleA from './moduleA';

describe('app', () => {
  test.only('Those should work', async () => {
    const response = await request(app)
      .post('/signup')
      .send({ password: 'pw' });
    expect(response.status).toBe(200);
  });

  test('I need to force hash to crash here', async () => {
    const mockedError = new Error('hash error');
    const hashSpy = jest.spyOn(moduleA, 'hash').mockRejectedValueOnce(mockedError);
    const response = await request(app)
      .post('/signup')
      .send({ password: 'pw' });
    expect(response.status).toBe(500);
    expect(moduleA.hash).toBeCalledWith('pw');
    hashSpy.mockRestore();
  });

  test('moduleA.hash should be back to its default function', async () => {
    const logSpy = jest.spyOn(console, 'log');
    const response = await request(app)
      .post('/signup')
      .send({ password: 'pw' });
    expect(response.status).toBe(200);
    expect(logSpy).toBeCalledWith('real hashed value');
  });
});
