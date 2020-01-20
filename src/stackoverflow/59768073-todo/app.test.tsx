import { App } from './app';

describe('59768073', () => {
  it('Should Init on ComponentDidMount', () => {
    const props = { initialState: {} };
    const appWrapper = new App(props);
    const onMountFuctionSpy = jest.spyOn(appWrapper, 'onMountFuction');
    appWrapper.componentDidMount();
    expect(onMountFuctionSpy).toBeCalledWith('The Component Did Mount');
  });
});
