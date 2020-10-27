import * as mod from './';

console.log(mod);

describe('64549093', () => {
  it('should pass', () => {
    const BarConstructorMock = jest.spyOn(mod as any, 'Bar').mockImplementationOnce(() => {
      console.log('fake Bar constructor implmentation');
    });
    new mod.default();
    expect(BarConstructorMock).toBeCalled();
  });
});
