import app from './';
import request from 'supertest';

describe('app', () => {
  it('should contain token response header', async () => {
    const response = await request(app).get('/test-with-token');
    expect(response.header).toHaveProperty('token');
    expect(response.status).toBe(200);
  });

  it('should not contain token response header', async () => {
    const response = await request(app).get('/test');
    expect(response.header).not.toHaveProperty('token');
    expect(response.status).toBe(200);
  });
});
