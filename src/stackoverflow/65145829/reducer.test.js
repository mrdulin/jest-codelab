import reducers from './reducer';

describe('65145829', () => {
  describe('background reducer', () => {
    it('should change background type', () => {
      expect(
        reducers(
          { background: { type: 'none', color1: '#ffffff', color2: '#ffffff' } },
          { type: 'changeBackgroundType', payload: { type: 'type-a' } },
        ).background,
      ).toEqual({
        type: 'type-a',
        color1: '#ffffff',
        color2: '#ffffff',
      });
    });

    it('should add gradient start', () => {
      expect(
        reducers(
          { background: { type: 'none', color1: '#ffffff', color2: '#ffffff' } },
          { type: 'addGradientStart', payload: { color: '#bababa' } },
        ).background,
      ).toEqual({
        type: 'none',
        color1: '#bababa',
        color2: '#ffffff',
      });
    });
    it('should add gradient end', () => {
      expect(
        reducers(
          { background: { type: 'none', color1: '#ffffff', color2: '#ffffff' } },
          { type: 'addGradientEnd', payload: { color: '#bababa' } },
        ).background,
      ).toEqual({
        type: 'none',
        color1: '#ffffff',
        color2: '#bababa',
      });
    });
  });

  describe('url reducer', () => {
    it('should add url', () => {
      expect(reducers({ url: '' }, { type: 'addUrl', payload: { url: 'localhost' } }).url).toEqual('localhost');
    });
  });
});
