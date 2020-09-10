import { useNiceHook } from './';
import { renderHook } from '@testing-library/react-hooks';

describe('63401335', () => {
  it('should pass', () => {
    const mAnalytics = {
      identify: jest.fn(),
    };
    Object.defineProperty(window, 'analytics', {
      value: mAnalytics,
    });
    const data = {};
    renderHook(() => useNiceHook(data));
    expect(mAnalytics.identify).toBeCalled();
  });
});
