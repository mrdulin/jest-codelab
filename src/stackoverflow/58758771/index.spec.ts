import { init } from './';
import * as constants from './constants';

describe('git', () => {
  describe('init', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('should fail if the deployment folder begins with /', async () => {
      const mConstants = {
        build: '/',
        action: {
          pusher: {
            name: 'asd',
            email: 'as@cat'
          },
          gitHubToken: 'ccsa'
        }
      };
      const spy = jest.spyOn(constants, 'get').mockReturnValueOnce(mConstants);
      const actualValue = await init();
      expect(actualValue).toEqual(mConstants);
      expect(spy).toBeCalledTimes(1);
    });

    it('should fail if the deployment folder begins with /', async () => {
      const mConstants = {
        build: 'build',
        action: {
          pusher: {
            name: 'zzz',
            email: 'www@cat'
          },
          gitHubToken: 'xxx'
        }
      };
      const spy = jest.spyOn(constants, 'get').mockReturnValueOnce(mConstants);
      const actualValue = await init();
      expect(actualValue).toEqual(mConstants);
      expect(spy).toBeCalledTimes(1);
    });
  });
});
