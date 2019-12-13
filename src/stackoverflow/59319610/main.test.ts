import { main } from './main';

describe('main', () => {
  it('should pass', () => {
    const original = process.env.MOCK_MODE;
    process.env.MOCK_MODE = 'true';
    const actual = main();
    expect(actual).toBe('true');
    process.env.MOCK_MODE = original;
  });
  it('should restore MOCK_MODE', () => {
    expect(process.env.MOCK_MODE).toBe('undefined');
  });
});
