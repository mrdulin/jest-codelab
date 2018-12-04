import nock from 'nock';
import request from 'supertest';
import axios from 'axios';
import app from './app';

jest.unmock('axios');

const host = 'http://server.com';
axios.defaults.baseURL = host;

describe('Liveness and Readiness', () => {
  it('Microservice repond statut code 200 when requested on /ping ', (done) => {
    nock(host)
      .get('/health')
      .reply(200);
    request(app)
      .get('/ping')
      .expect(200, done);
  });

  it('Microservice repond statut code 503 when requested on /ping ', (done) => {
    nock(host)
      .get('/health')
      .reply(503);
    request(app)
      .get('/ping')
      .expect(503, done);
  });
});
