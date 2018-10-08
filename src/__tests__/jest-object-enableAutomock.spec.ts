const banana = require('../banana');

describe('jest', () => {

  const apple = require('../apple');

  describe('enableAutomock - Enables automatic mocking in the module loader.', () => {

    const grape = require('../grape');

    it('without enableAutomock, each module should be a real module through require', () => {

      expect(banana()).toBe('banana');
      expect(apple()).toBe('apple');
      expect(grape()).toBe('grape');

    });
    
    //TODO
    // it('with enableAutomock', () => {
    //   jest.enableAutomock();
    //
    //   const orange = require('../orange');
    //  
    //   expect(orange()).toBeUndefined();
    // });

  }); 

});
