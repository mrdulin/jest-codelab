import BookLogger from './Book-logger';
const logger = BookLogger.getLogger('Book-service', BookLogger.LOG_LEVEL.INFO);

export function main() {
  const error = new Error('Internal server error');
  logger.error(`Failed to get All Books in given category ${error}`);
}
