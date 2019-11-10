import { init } from './';
import { constants } from './constants';
import _ from 'lodash';

const originalConstants = _.cloneDeep(constants);

describe('git', () => {
  afterEach(() => {
    _.assignIn(constants, originalConstants);
  });
  describe('init', () => {
    it('t-1', async () => {
      Object.assign(constants, {
        build: '/',
        action: {
          ...constants.action,
          pusher: { ...constants.action.pusher, name: 'aaa', email: 'aaa@cat' },
          gitHubToken: 'bbb'
        }
      });
      const actualValue = await init();
      expect(actualValue).toEqual({
        build: '/',
        action: {
          pusher: {
            name: 'aaa',
            email: 'aaa@cat'
          },
          gitHubToken: 'bbb'
        }
      });
    });

    it('should restore original contants', () => {
      expect(constants).toEqual({
        build: 'dist',
        action: {
          pusher: {
            name: 'montezuma',
            email: 'best@cat'
          },
          gitHubToken: 'exists'
        }
      });
    });
  });
});
