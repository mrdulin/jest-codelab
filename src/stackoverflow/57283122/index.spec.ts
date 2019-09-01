import { getTodo } from './';
import https from 'https';
import { EventEmitter } from 'events';

describe('test', () => {
  const emitter = new EventEmitter();
  const httpIncomingMessage = {
    on: jest.fn(),
    statusCode: 'mock status code',
    headers: {
      authorization: 'Bearer mocked token'
    }
  };
  https.get = jest.fn().mockImplementation((uri, callback?) => {
    if (callback) {
      callback(httpIncomingMessage);
    }
    return emitter;
  });
  it('should get todo correctly', () => {
    getTodo();
  });

  it('should trigger error event handler correctly', done => {
    getTodo();
    emitter.emit('error', 'error message');
    process.nextTick(() => {
      done();
    });
  });
});
