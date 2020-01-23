import { Logger } from 'winston';
import { Format, TransformableInfo } from 'logform';

jest.mock('winston', () => {
  const mFormat = {
    combine: jest.fn().mockReturnThis(),
    timestamp: jest.fn().mockReturnThis(),
    printf: jest.fn().mockReturnThis(),
  };
  const mTransports = {
    File: jest.fn(),
  };
  return { createLogger: jest.fn(), format: mFormat, transports: mTransports };
});

describe('59857333', () => {
  afterEach(() => {
    jest.resetModules();
  });
  it.each`
    LOG_LEVEL      | expected
    ${'debug'}     | ${'debug'}
    ${'undefined'} | ${'info'}
    ${''}          | ${'debug'}
  `('should pass with LOG_LEVEL: $LOG_LEVEL', async ({ LOG_LEVEL, expected }) => {
    const ORIGINAL_LOG_LEVEL = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = LOG_LEVEL;
    const { logger: loggerProvider } = require('./logger');
    const { createLogger, format, transports } = require('winston');
    const logFile = 'access_log.txt';
    let templateFunction!: (info: TransformableInfo) => string;
    (format.printf as jest.MockedFunction<typeof format.printf>).mockImplementationOnce(function(this: Format, func) {
      templateFunction = func;
      return this;
    });
    const mLogger = {} as Logger;
    (createLogger as jest.MockedFunction<typeof createLogger>).mockReturnValue(mLogger);
    const logger = await loggerProvider(logFile);
    expect(logger).toBeDefined();
    expect(createLogger).toBeCalledWith({
      level: expected,
      format: expect.any(Object),
      transports: [expect.any(Object)],
    });
    expect(format.combine).toBeCalledTimes(1);
    expect(format.timestamp).toBeCalledWith({ format: 'YYYY-MM-DD HH:mm:ss' });
    expect(format.printf).toBeCalledWith(templateFunction);
    expect(transports.File).toBeCalledWith({ filename: 'log/access_log.txt' });

    // test templateFunction
    const info = { timestamp: 666, level: expected, message: 'connection success' };
    const logEntry = templateFunction(info);
    expect(logEntry).toBe(`666 ${expected}: connection success`);

    process.env.LOG_LEVEL = ORIGINAL_LOG_LEVEL;
  });
});
