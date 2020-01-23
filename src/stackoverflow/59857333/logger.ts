import { createLogger, format, transports } from 'winston';
import path from 'path';

console.log('process.env.LOG_LEVEL: ', process.env.LOG_LEVEL);
const loggerLevel = process.env.LOG_LEVEL || 'debug';
const logDir = './log';

export function logger(logFile) {
  return new Promise((resolve) => {
    resolve(
      createLogger({
        level: loggerLevel === 'undefined' ? 'info' : loggerLevel,
        format: format.combine(
          format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
          }),
          format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
        ),
        transports: [new transports.File({ filename: path.join(logDir, logFile) })],
      }),
    );
  });
}
