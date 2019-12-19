import app from './app';
import request from 'supertest';

describe('User', () => {
  it('Should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        first_name: 'Lorem',
        last_name: 'Ipsum',
        email: 'lorem@ipsum.com',
        password: '12345678',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('user');
  });
});
