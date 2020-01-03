import MyService from './service';

describe('MyService', () => {
  beforeEach(() => {
    const context = 'init';
    MyService.init(context);
  });
  describe('#checkForContextParam', () => {
    it('Check for context param', () => {
      const context = 'test';
      MyService.checkForContextParam(context);
      expect(MyService.playerStats.contextValue).toEqual(context);
      expect(MyService.playerStats.contextParam).toEqual('context=test');
    });

    it('context missing', () => {
      MyService.checkForContextParam();
      expect(MyService.playerStats.contextValue).toEqual('context_missing');
      expect(MyService.playerStats.contextParam).toEqual('error=context_missing');
    });
  });
});
