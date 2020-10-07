import Category from './Category';

describe('Test for category', () => {
  it('error for null category', () => {
    expect(() => new Category(null)).toThrowError('The category field needs to be filled');
  });
  it('Error for empty category', () => {
    expect(() => new Category(' ')).toThrowError('The category field needs to be filled');
  });
  it('Category registration', () => {
    const c = new Category('Devops');
    expect(c._name).toBe('Devops');
  });
});
