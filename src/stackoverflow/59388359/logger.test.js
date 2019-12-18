jest.mock('winston', () => {
  const mFormat = {
    combine: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
  };
  const mTransports = {
    Console: jest.fn(),
    File: jest.fn(),
  };
  const mLogger = {
    info: jest.fn(),
  };
  return {
    format: mFormat,
    transports: mTransports,
    createLogger: jest.fn(() => mLogger),
  };
});
const { createLogger, format, transports } = require('winston');

describe('logger', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should pass', () => {
    let templateFunctions = [];
    format.printf.mockImplementation((templateFn) => {
      templateFunctions.push(templateFn);
    });
    const logger = require('./logger');
    logger.info('Hello world');
    const info = {
      timestamp: 123,
      level: 'info',
      message: 'haha',
    };
    const tFn1 = templateFunctions.shift();
    expect(tFn1(info)).toBe(`${info.timestamp} ${info.level}: ${info.message}`);
    const tFn2 = templateFunctions.shift();
    expect(tFn2(info)).toBe(`${info.level}: ${info.message}`);
    expect(format.combine).toBeCalledTimes(2);
    expect(format.timestamp).toBeCalledWith({ format: 'YYYY-MM-DD HH:mm:ss' });
    expect(format.printf).toBeCalledWith(expect.any(Function));
    expect(transports.Console).toBeCalledTimes(1);
    expect(transports.File).toBeCalledWith({ filename: 'filename' });
    expect(createLogger).toBeCalledTimes(1);
  });
});
