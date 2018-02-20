import { getUserById } from './';

const coin = () => Math.random() > 0.5;

describe('should throw an error test suites', () => {
  const testCount = 1000;

  for (let i = 0; i < testCount; i++) {
    it(`t-${i}`, async () => {
      const id = coin() ? 1 : 0;
      try {
        const user = await getUserById(id);
        expect(user).toEqual({ id });
      } catch (error) {
        expect(error.message).toBe('user id is required');
      }
    });
  }
});
