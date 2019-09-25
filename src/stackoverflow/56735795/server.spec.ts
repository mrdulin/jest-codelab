import request from 'supertest';
import createHttpServer from './server';
import fetch from 'node-fetch';

const { Response } = jest.requireActual('node-fetch');
const server = createHttpServer();

jest.mock('node-fetch', () => jest.fn());

afterAll(done => {
  server.close(done);
});

describe('router', () => {
  test('GET: should return data', async () => {
    const expectedResponse = { test: 'TEST' };
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(new Response(JSON.stringify(expectedResponse)));

    const response = await request(server).get('/test');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse);
  });

  test('GET: should throw error', async () => {
    const mockedFetchError = new Error('some error');
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(mockedFetchError);
    const response = await request(server).get('/test');
    expect(response.status).toEqual(500);
  });
});
