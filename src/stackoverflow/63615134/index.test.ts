const ComponentDefaultProp = {
  testLink() {
    return 'real testLink implementation';
  },
  testAnother() {
    return 'real testAnother implementation';
  },
};

describe('63615134', () => {
  const testProp: Array<{ name: keyof typeof ComponentDefaultProp }> = [{ name: 'testLink' }, { name: 'testAnother' }];

  for (let i = 0; i < testProp.length; i++) {
    it(`test default props of ${testProp[i].name}`, () => {
      const test = testProp[i].name;
      jest.spyOn(ComponentDefaultProp, test);
      ComponentDefaultProp[test]();
      expect(ComponentDefaultProp[test]).toBeCalled();
    });
  }
});
