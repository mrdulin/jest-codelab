import { main } from './';
import { RecommendCards } from './recommendCards';

jest.mock('./recommendCards', () => {
  const mRecommendCards = { init: jest.fn() };
  return { RecommendCards: jest.fn(() => mRecommendCards) };
});

describe('59927917', () => {
  it('should pass', () => {
    const mockInstance = new RecommendCards();
    document.addEventListener = jest.fn().mockImplementationOnce((event, callback) => {
      callback();
    });
    main();
    expect(document.addEventListener).toBeCalledWith('DOMContentLoaded', expect.any(Function));
    expect(mockInstance.init).toBeCalledTimes(1);
  });
});
