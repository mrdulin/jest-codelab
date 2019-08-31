const { Viewer } = require('./viewer');
const my_wrapper = require('./');
const util = require('./util');

const mockedViewer = {
  Viewer: jest.fn()
};

jest.mock('./viewer', () => mockedViewer);

describe('mp_wrapper', () => {
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
      expect(mockedViewer.Viewer).not.toBeCalled();
    });
  });
});
