const { Viewer } = require('./viewer');
const my_wrapper = require('./');
const util = require('./util');

jest.mock('./viewer', () => {
  return {
    Viewer: jest.fn()
  };
});

describe('mp_wrapper', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('createViewer', () => {
    it('t1', () => {
      util.isElement = jest.fn().mockReturnValueOnce(true);
      let viewer = my_wrapper.createViewer('el');
      expect(util.isElement).toBeCalledWith('el');
      expect(viewer).toBeInstanceOf(Viewer);
    });

    it('t2', () => {
      util.isElement = jest.fn().mockReturnValueOnce(false);
      expect(() => my_wrapper.createViewer('el')).toThrowError(
        new Error('Invalid Element when attempting to create underlying viewer.')
      );
      expect(Viewer).not.toBeCalled();
    });
  });
});
