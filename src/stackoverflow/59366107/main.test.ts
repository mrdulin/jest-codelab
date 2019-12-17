import { main } from './main';
import BookLogger from './Book-logger';

jest.mock('./Book-logger.ts', () => {
  const mLogger = {
    error: jest.fn(),
  };
  return {
    LOG_LEVEL: require.requireActual('./Book-logger.ts').default.LOG_LEVEL,
    getLogger: jest.fn(() => mLogger),
  };
});

describe('main', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should mock logger correctly', () => {
    const logger = BookLogger.getLogger('Book-service', BookLogger.LOG_LEVEL.INFO);
    main();
    expect(jest.isMockFunction(logger.error)).toBeTruthy();
    const error = new Error('Internal server error');
    expect(logger.error).toBeCalledWith(`Failed to get All Books in given category ${error}`);
  });
});
