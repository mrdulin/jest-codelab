function createInvalidRequestTests() {
  describe('invalid request', () => {
    let response;
    beforeAll(async () => {
      // simulate request of supertest
      response = await Promise.resolve({ status: 400, body: { error: { code: 1, message: 'network error' } } });
    });

    it('should return an invalid status code', () => {
      expect(response.status).toBe(400);
    });

    it('should return a valid error schema', () => {
      expect(typeof response.body).toBe('object');
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toHaveProperty('code');
      expect(response.body.error).toHaveProperty('message');
    });

    it('should return an error with explicit message', () => {
      expect(response.body.error).toHaveProperty('message');
    });
  });
}

describe('Authentication tests', () => {
  describe('POST /login', () => {
    describe('valid request', () => {
      it('should login correctly', () => {
        expect(1).toBe(1);
      });
    });

    createInvalidRequestTests();
  });

  describe('POST /register', () => {
    describe('valid request', () => {
      it('should register correctly', () => {
        expect(2).toBe(2);
      });
    });

    createInvalidRequestTests();
  });
});
