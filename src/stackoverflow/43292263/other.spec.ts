import { other } from './other';

describe('other', () => {
  it('t1', () => {
    const actualValue = other();
    expect(actualValue).toBe('real data by name');
  });
});
