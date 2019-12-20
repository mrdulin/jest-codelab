const app = require('./app');
const request = require('supertest');

describe('47865190', () => {
  it('should pass', (done) => {
    expect.assertions(1);
    request(app)
      .post('/auth/signup')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual(
          expect.objectContaining({
            success: true,
            message: 'registration success',
            token: expect.any(String),
            user: expect.any(Object),
          }),
        );
        done();
      });
  });
});
