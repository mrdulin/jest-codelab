import createHttpServer from './';
import { agent } from 'supertest';
import { omit } from 'lodash';

const httpServer = createHttpServer();
const request = agent(httpServer);

afterAll(done => {
  httpServer.close(done);
});

describe('app', () => {
  it('should return a successful response for GET /health', async () => {
    const res = await request.get('/health');
    res.header = omit(res.header, ['date']);
    expect(res).toMatchSnapshot();
  });
});
