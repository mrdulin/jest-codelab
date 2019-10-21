import { render } from './';

describe('render', () => {
  test('should render my component', () => {
    document.body.setAttribute('data-basepath', 'coolvalue');
    const actualValue = render();
    expect(actualValue).toBe('My Component');
  });

  it('should not render my component', () => {
    document.body.setAttribute('data-basepath', '');
    const actualValue = render();
    expect(actualValue).toBeNull();
  });
});
