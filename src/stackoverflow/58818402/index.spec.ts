import { SomeComponent } from './';

describe('SomeComponent', () => {
  it('should call resetAdd', () => {
    const comp = new SomeComponent();
    const streetCallResetSpy = jest.spyOn(comp['fGroup']['controls']['street'], 'callReset');
    const zipCallResetSpy = jest.spyOn(comp['fGroup']['controls']['zip'], 'callReset');
    const cityCallResetSpy = jest.spyOn(comp['fGroup']['controls']['city'], 'callReset');
    const qaModel = {
      children: [
        { token: 'street', pathway: 'street' },
        { token: 'zip', pathway: 'zip' },
        { token: 'city', pathway: 'city' }
      ]
    };
    comp.resetAdd(qaModel);
    expect(streetCallResetSpy).toBeCalledTimes(1);
    expect(zipCallResetSpy).toBeCalledTimes(1);
    expect(cityCallResetSpy).toBeCalledTimes(1);
  });
});
