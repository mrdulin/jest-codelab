const server = require('./app');
// const agent = require('supertest').agent(server);
const request = require('supertest');

describe('app', () => {
  it('should create a new quote', async () => {
    const res = await request(server).post('/api/quotes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('result', true);
    expect(res.body).toHaveProperty('msg', 'Successfully inserted a quote');
  });
});
