import request from 'supertest';

describe('/api/users/auth', () => {
  let server;
  beforeAll(async () => {
    const mod = await import('./');
    server = (mod as any).default;
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    }
  });

  it('should return 400 if email is invalid', async () => {
    const res = await request(server)
      .post('/api/users/auth/register')
      .send({
        email: 'nomail',
        password: 'validpassword123',
        name: 'name',
      });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('errArray');
  });
});
