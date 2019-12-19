const supertest = require('supertest');
const app = require('./server');

describe('server', () => {
  it('should pass', (done) => {
    supertest(app)
      .post('/abc')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.text).toBe('def');
        done();
      });
  });
});
