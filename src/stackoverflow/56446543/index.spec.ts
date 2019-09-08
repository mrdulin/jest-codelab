describe('TestSubject', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should mock dotenv', () => {
    jest.doMock('dotenv');
    const dotenv = require('dotenv');
    const { TestSubject } = require('./');
    const subject = new TestSubject();
    subject.test();
    expect(jest.isMockFunction(dotenv.config)).toBeTruthy();
  });

  it('should not mock dotenv', () => {
    jest.unmock('dotenv');
    const dotenv = require('dotenv');
    const { TestSubject } = require('./');
    const subject = new TestSubject();
    subject.test();
    expect(jest.isMockFunction(dotenv.config)).toBeFalsy();
  });
});
