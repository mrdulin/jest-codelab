import { ENIP } from './';
import { Socket } from 'net';

describe('ENIP', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  describe('#connect', () => {
    it('should pass', async () => {
      const writeSpy = jest.spyOn(Socket.prototype, 'write').mockImplementation();
      const connectSpy = jest.spyOn(Socket.prototype, 'connect').mockImplementationOnce((port, addr, callback) => {
        callback();
      });
      const enip = new ENIP();
      await enip.connect('localhost');
      expect(writeSpy).toBeCalledWith('session');
      expect(connectSpy).toBeCalledWith(3000, 'localhost', expect.any(Function));
    });
  });
});
